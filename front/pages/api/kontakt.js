import nodemailer from 'nodemailer'

const NOCODB_URL = process.env.NOCODB_URL
const NOCODB_TOKEN = process.env.NOCODB_TOKEN

export default function handler(req, res) {
  if (req.method === 'POST') {
    async function postToNocoDb(data) {
      // console.log('Token (POST): ', NOCODB_TOKEN)
      // console.log('Query (POST): ', NOCODB_URL + '/nc/bvpk_9YLS/api/v1/kontakt')
      const res = await fetch(
        NOCODB_URL + '/nc/bvpk_9YLS/api/v1/kontaktanfragen',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xc-auth': NOCODB_TOKEN,
          },
          body: JSON.stringify(data),
        }
      )
      const json = await res.json()
      if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
      }
      console.log(json)
      return json
    }

    postToNocoDb(req.body)

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
      to: 'linus@sehn.tech',
      subject: 'Test',
      text: 'Text',
      html: <h1>Text HTML</h1>,
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err)
      else console.log(info)
    })

    res.status(200).json(req.body)
    console.log(req.body)
  } else {
    res.status(400).send({ message: 'Only POST requests allowed' })
  }
}
