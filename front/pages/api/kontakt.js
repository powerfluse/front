const NOCO_DB_URL = process.env.NOCO_DB_URL
const NOCO_DB_TOKEN = process.env.NOCO_DB_TOKEN

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json(req.body)
    console.log(req.body)

    async function postToNocoDb(data) {
      console.log('Token (POST): ', NOCO_DB_TOKEN)
      console.log(
        'Query (POST): ',
        NOCO_DB_URL + '/nc/bvpk_9YLS/api/v1/kontakt'
      )
      const res = await fetch(NOCO_DB_URL + '/nc/bvpk_9YLS/api/v1/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-auth': NOCO_DB_TOKEN,
        },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
      }
      console.log(json)
      return json
    }
    postToNocoDb(req.body)
  } else {
    res.status(400).send({ message: 'Only POST requests allowed' })
  }
}
