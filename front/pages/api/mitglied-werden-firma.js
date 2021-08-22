import axios from 'axios'
import nodemailer from 'nodemailer'

// Get environment variables
const NOCODB_URL = process.env.NOCODB_URL
const NOCODB_TOKEN = process.env.NOCODB_TOKEN
const EMAIL_PASS = process.env.EMAIL_PASS

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Set axios defaults from environment variables
    axios.defaults.baseURL = NOCODB_URL
    axios.defaults.headers.common['xc-auth'] = NOCODB_TOKEN
    // Send POST request to NocoDB
    axios
      .post('/nc/bvpk_9YLS/api/v1/firmenmitglieder', req.body)
      .then((response) => {
        // console.log(response)
        res.status(response.status).json(req.body)
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          res.status(error.response.status).json(error.response)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
          res.status(error.request.status).json(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
          res.status(400).json(error.message)
        }
        console.log(error.config)
      })

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.strato.de',
      auth: {
        user: 'webmailer@bvpk.org',
        pass: EMAIL_PASS,
      },
      secure: true,
    })

    const mailData = {
      from: {
        name: 'Bundesverband Pyrotechnik | Geschäftsstelle',
        address: 'webmailer@bvpk.org',
      },
      to: req.body.f_email,
      subject: 'Dein Mitgliedsantrag beim BVPK',
      text: 'Hallo und herzlich Willkommen im BVPK!\n\nDein Mitgliedsantrag ist bei uns eingegangen und wir freuen uns sehr, Dich als Mitglied begrüßen zu dürfen. Gemeinsam geben wir dem Feuerwerk die starke Stimme, die es braucht!\n\nDein Antrag wird bearbeitet und wir melden uns zeitnah mit weiteren Infos.\n\nSchaue gerne auf unseren Kanälen auf Twitter, Facebook und Insta vorbei - @BVPyro\n\nMit feurigen Grüßen,\n\nDein Bundesverband Pyrotechnik und Kunstfeuerwerk / Vorstand',
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
  } else {
    res.status(400).send({ message: 'Only POST requests allowed' })
  }
}
