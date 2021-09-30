import axios from 'axios'
import nodemailer from 'nodemailer'

// Get environment variables
const NOCODB_TOKEN = process.env.NOCODB_TOKEN
const EMAIL_PASS = process.env.EMAIL_PASS

// Set axios defaults from variables
const baseURL = 'https://bvpk-db.linus.cx'
axios.defaults.baseURL = baseURL
axios.defaults.headers.common['xc-auth'] = NOCODB_TOKEN

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.strato.de',
  auth: {
    user: 'webmailer@bvpk.org',
    pass: EMAIL_PASS,
  },
  secure: true,
})

// Main request handling
export default function mitgliedFormHandler(req, res) {
  return new Promise((resolve) => {
    if (req.method === 'POST') {
      // Set axios defaults from environment variables
      axios.defaults.baseURL = baseURL
      axios.defaults.headers.common['xc-auth'] = NOCODB_TOKEN
      // Send POST request to NocoDB after logging it to console
      console.log('Request Body: ', req.body)
      axios
        .post('/nc/bvpk_9YLS/api/v1/mitglieder', req.body)
        .then((response) => {
          // Define mail to the person who filled out the form
          // BCC webmailer@bvpk.org
          const mailToInitiator = {
            from: {
              name: 'BVPK e.V. Geschäftsstelle',
              address: 'webmailer@bvpk.org',
            },
            to: req.body.email,
            bcc: 'webmailer@bvpk.org',
            replyTo: 'info@bvpk.org',
            subject: 'Herzlich Willkommen beim BVPK!',
            text: `Hallo und herzlich Willkommen im Bundesverband Pyrotechnik und Kunstfeuerwerk e.V.!,

Dein Mitgliedsantrag ist bei uns eingegangen und wir freuen
uns sehr, Dich als Mitglied begrüßen zu dürfen. Gemeinsam
geben wir dem Feuerwerk die starke Stimme, die es braucht!

Dein Antrag wird bearbeitet und wir melden uns zeitnah mit
weiteren Infos. Untenstehend findest Du eine Übersicht über
Deine Angaben im Mitgliedsformular.

Schau' gerne auf unseren Kanälen auf Twitter, Facebook und
Insta vorbei - @BVPyro

Mit feurigen Grüßen,

Dein BVPK
Geschäftsführung


Deine Eingaben (gekürzt):

Name: ${req.body.vorname} ${req.body.nachname}
Geburtsdatum: ${req.body.geburtsdatum}
Email: ${req.body.email}
Telefon: ${req.body.telefon}
FEUERWERK.net: ${
              req.body.feuerwerk_net
                ? req.body.feuerwerk_net
                : 'kein Mitglied auf FEUERWERK.net'
            }

Addresse:
${req.body.strasse} ${req.body.hausnummer}
${req.body.adresszusatz ? req.body.addresszusatz : ''}
${req.body.plz} ${req.body.ort}
${req.body.land}

Grundbeitrag:
24€ Jährlich

Förderbeitrag:
${
  req.body.foerderbeitrag
    ? req.body.foerderbeitrag + '€ ' + req.body.zahlungsrhythmus
    : 'kein zusätzlicher Förderbeitrag'
}
Kontoinhaber/in: ${req.body.kontoinhaber}
IBAN: ${req.body.iban.substring(0, 6)}********

Versicherung: ${req.body.versicherung ? 'Ja' : 'Nein'}
Newsletter: ${req.body.nl_consent ? 'Ja' : 'Nein'}
`,
          }
          // Send mail to person who filled out the contact form
          transporter.sendMail(mailToInitiator, function (err, info) {
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
                'Something is wrong with your request. You can contact support at support@bvpk.org',
            })
            resolve()
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('Error when communication with NocoDB: ', error.request)
            res.status(500).send({
              message:
                'Something is wrong here. Please contact support@bvpk.org',
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
