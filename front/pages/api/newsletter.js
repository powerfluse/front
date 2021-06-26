const NOCODB_URL = process.env.NOCODB_URL
const NOCODB_TOKEN = process.env.NOCODB_TOKEN

export default function handler(req, res) {
  if (req.method === 'POST') {
    async function postToNocoDb(data) {
      // console.log('Token (POST): ', NOCODB_TOKEN)
      // console.log(
      //   'Query (POST): ',
      //   NOCODB_URL + '/nc/bvpk_9YLS/api/v1/newsletter'
      // )
      const res = await fetch(NOCODB_URL + '/nc/bvpk_9YLS/api/v1/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-auth': NOCODB_TOKEN,
        },
        body: JSON.stringify(data),
      })
      // const json = await res.json()
      // console.log(json)
      if (res.status !== 200) {
        throw new Error('Failed to fetch API')
      }
      return res.json
    }
    postToNocoDb(req.body)
      .then(function () {
        res.status(200).send({ message: 'Danke, das hat funktioniert!' })
      })
      .catch(function (e) {
        res.status(400).send({
          message:
            'Oops. Hier gab es ein Problem. Vielleicht bist du schon angemeldet',
        })
      })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Only POST requests allowed')
  }
}
