const DIRECTUS_URL = process.env.DIRECTUS_URL

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

export async function getAktuelles6() {
  const data = await getAPI(
    '/items/aktuelles?limit=6&filter[status][_eq]=published&sort[]=-date'
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
