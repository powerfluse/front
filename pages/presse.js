import Head from '../components/head'
import Blog from '../components/blog'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'
import { getFromDirectus } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="min-h-screen bg-purple-800">
        <Blog props={props} />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const page = await getFromDirectus('/items/presse_page')
  const items = await getFromDirectus(
    '/items/aktuelles?filter[status][_eq]=published&filter[category][_eq]=pressemitteilung'
  )
  return {
    props: { page, items },
    revalidate: 60,
  }
}
