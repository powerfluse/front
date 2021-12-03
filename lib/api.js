  export async function getFromDirectus(query) {
    const baseURL = 'https://cms.bvpk.org'
    const res = await fetch(baseURL + query)
    const json = await res.json()
    if (json.errors) {
      console.log(json)
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }
