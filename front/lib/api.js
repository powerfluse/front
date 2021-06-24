const DIRECTUS_URL = process.env.DIRECTUS_URL
const NOCO_DB_URL = process.env.NOCO_DB_URL
const NOCO_DB_TOKEN = process.env.NOCO_DB_TOKEN

async function postAPI(endpoint, data = {}) {
  console.log('Token (POST): ', NOCO_DB_TOKEN)
  console.log('Query (POST): ', NOCO_DB_URL + endpoint)
  // Default options are marked with *
  const res = await fetch(NOCO_DB_URL + endpoint, {
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
  return json
}

async function getAPI(query) {
  console.log('Query: ', DIRECTUS_URL + query)

  const res = await fetch(DIRECTUS_URL + query)
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function postKontakt(data) {
  const post = await postAPI('/nc/bvpk_9YLS/api/v1/kontakt', data)
  return post
}

export async function getAktuellesAll() {
  const data = await getAPI('/items/aktuelles?filter[status][_eq]=published')
  return data
}

export async function getAktuellesSingle(slug) {
  const data = await getAPI('/items/aktuelles?filter[slug][_eq]=' + slug)
  return data
}

export async function getAktuelles50() {
  const data = await getAPI(
    '/items/aktuelles?limit=50&filter[status][_eq]=published&sort[]=-date'
  )
  return data
}

export async function getAktuelles10() {
  const data = await getAPI(
    '/items/aktuelles?limit=10&filter[status][_eq]=published&sort[]=-date'
  )
  return data
}

export async function getIndexPage() {
  const data = await getAPI('/items/index_page')
  return data
}

export async function getAboutPage() {
  const data = await getAPI('/items/about_page')
  return data
}

export async function getAktuellesPage() {
  const data = await getAPI('/items/aktuelles_page')
  return data
}

export async function getContactPage() {
  const data = await getAPI('/items/contact_page')
  return data
}
