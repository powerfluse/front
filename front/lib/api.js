const API_URL = process.env.DIRECTUS_URL

async function fetchAPI(query) {
  console.log(query)

  const res = await fetch(API_URL + query)
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAktuellesPage() {
  const data = await fetchAPI('/items/aktuelles_page')
  return data
}

export async function getAktuellesAll() {
  const data = await fetchAPI('/items/aktuelles?filter[status][_eq]=published')
  return data
}

export async function getAktuellesSingle(slug) {
  const data = await fetchAPI('/items/aktuelles?filter[slug][_eq]=' + slug)
  return data
}

export async function getAktuelles50() {
  const data = await fetchAPI(
    '/items/aktuelles?limit=50?filter[status][_eq]=published'
  )
  return data
}

export async function getIndexPage() {
  const data = await fetchAPI('/items/index_page')
  return data
}
