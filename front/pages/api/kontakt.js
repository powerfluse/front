import axios from 'axios'
import nodemailer from 'nodemailer'

// Get environment variables
const NOCODB_URL = process.env.NOCODB_URL
const NOCODB_TOKEN = process.env.NOCODB_TOKEN

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Set axios defaults from environment variables
    axios.defaults.baseURL = NOCODB_URL
    axios.defaults.headers.common['xc-auth'] = NOCODB_TOKEN
    // Send POST request to NocoDB
    axios
      .post('/nc/bvpk_9YLS/api/v1/kontaktanfragen', req.body)
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
        pass: 'Mushy.Pursuable.Ramp.Growing.Landowner.Overtake.Imitation.Halogen.Ruse',
      },
      secure: true,
    })

    const mailData = {
      from: 'webmailer@bvpk.org',
      to: req.body.k_email,
      subject: 'Deine Kontakfragen',
      text: 'Text',
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
  } else {
    res.status(400).send({ message: 'Only POST requests allowed' })
  }
}
