const NOCO_DB_URL = process.env.NOCO_DB_URL
const NOCO_DB_TOKEN = process.env.NOCO_DB_TOKEN

export default function handler(req, res) {
  if (req.method === 'POST') {
    async function postToNocoDb(data) {
      // console.log('Token (POST): ', NOCO_DB_TOKEN)
      // console.log(
      //   'Query (POST): ',
      //   NOCO_DB_URL + '/nc/bvpk_9YLS/api/v1/newsletter'
      // )
      const res = await fetch(NOCO_DB_URL + '/nc/bvpk_9YLS/api/v1/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-auth': NOCO_DB_TOKEN,
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
        new Error()
      })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Only POST requests allowed')
  }
}
