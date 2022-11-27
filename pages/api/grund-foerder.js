import axios from 'axios'
import nodemailer from 'nodemailer'

// Get environment variables
const NOCODB_TOKEN = process.env.NOCODB_TOKEN
const EMAIL_PASS = process.env.EMAIL_PASS

// Set axios defaults from variables
const baseURL = 'https://db.bvpk.org'
axios.defaults.baseURL = baseURL
axios.defaults.headers.common['xc-token'] = NOCODB_TOKEN

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.strato.de',
  auth: {
    user: 'webmailer@bvpk.org',
    pass: EMAIL_PASS,
  },
  secure: true,
  normalizeHeaderKey: (key) => {
    if (key.toLowerCase() === 'x-otobo-queue') {
      return 'X-OTOBO-Queue'
    } else {
      return key
    }
  },
})

// Main request handling
export default function mitgliedFormHandler(req, res) {
  return new Promise((resolve) => {
    if (req.method === 'POST') {
      // Set axios defaults from environment variables
      axios.defaults.baseURL = baseURL
      axios.defaults.headers.common['xc-token'] = NOCODB_TOKEN
      // Send POST request to NocoDB after logging it to console
      console.log('Request Body: ', req.body)
      axios
        .post('/api/v1/db/data/v1/BVPK/grund-foerder', req.body)
        .then((response) => {
          // Define mail to the person who filled out the form
          // BCC webmailer@bvpk.org
          const mailToInitiator = {
            from: {
              name: 'Bundesverband Pyrotechnik | Geschäftsstelle',
              address: 'webmailer@bvpk.org',
            },
            to: req.body.email,
            bcc: 'webmailer@bvpk.org',
            replyTo: 'info@bvpk.org',
            subject: 'Herzlich Willkommen beim BVPK!',
            text: `Sehr geehrte Damen und Herren,

wir freuen uns über die Umwandlung Ihrer Mitgliedschaft zu einer
Fördermitgliedschaft. Sie leisten damit einen wichtigen Beitrag zu Erhalt
und Pflege der Feuerwerkskultur in Deutschland.

Unten stehend finden Sie eine Übersicht über Ihre Angaben im
Änderungsformular. Der angegebene Beitrag wird auf Basis des SEPA-Mandats
von Ihrem bereits bei uns hinterlegten Konto abgebucht.

Schauen Sie auch gerne auf unseren Kanälen auf Facebook (@BVPyro),
Instagram (@bvpk_pyrotechnik) und Twitter (@BVPyro) vorbei. Das Teilen
unserer Beiträge ist ein wichtiger Weg, die Reichweite des Verbands zu
erhöhen.

Auch über unsere Homepage können Sie sich auf dem Laufenden halten:
https://bvpk.org/aktuelles

Gemeinsam geben wir dem Feuerwerk die starke Stimme, die es braucht!

Mit feurigen Grüßen,

Ihr BVPK
Mitgliederbetreuung

#------------------------------------------------
Ihre Eingaben (gekürzt):
#------------------------------------------------

Mitgliedsnummer: ${req.body.mitgliedsnummer}
Typ Mitgliedschaft: Fördermitgliedschaft
Förderbeitrag: ${req.body.foerderbeitrag}€ / ${req.body.zahlungsrhythmus}
`,
          }
          // Send mail to person who filled out the contact form
          transporter.sendMail(mailToInitiator, function (err, info) {
            if (err) console.log(err)
            else console.log(info)
          })
          const mailToITS = {
            from: {
              name: 'Bundesverband Pyrotechnik | Website',
              address: 'support@bvpk.org',
            },
            to: 'support@bvpk.org',
            subject: 'Neue Umwandlung zu einer Fördermitgliedschaft',
            text: `Hallo,

folgendes Mitglied möchte nun Fördermitglied werden.

Mitgliedsnummer: ${req.body.mitgliedsnummer}
Typ Mitgliedschaft: Fördermitgliedschaft
Förderbeitrag: ${req.body.foerderbeitrag}€ / ${req.body.zahlungsrhythmus}
`,
          }
          // Don't normalize headers
          transporter.sendMail(mailToITS, function (err, info) {
            if (err) console.log(err)
            else console.log(info)
          })
          res.status(response.status).end()
          resolve()
        })
        // Catch errors in request to NocoDB
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Response Data: ', error.response.data)
            console.log('Response Status Code: ', error.response.status)
            console.log('Response Headers: ', error.response.headers)
            res.status(error.response.status).send({
              message:
                'Da stimmt was nicht. Bitte kontaktiere unseren Support unter support@bvpk.org',
            })
            resolve()
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('Error when communicating with NocoDB: ', error.request)
            res.status(500).send({
              message:
                'Da stimmt was nicht. Bitte kontaktiere unseren Support unter support@bvpk.org',
            })
            resolve()
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Other unspecifed Error in request :', error.message)
            res.status(500).send({ message: error.message })
            resolve()
          }
          console.log(error.config)
        })
      // for all requests other than POST
    } else {
      res.status(400).send({ message: 'Only POST requests allowed' })
      return resolve()
    }
  })
}
