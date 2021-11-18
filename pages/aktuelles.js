import Head from '../components/head'
import Blog from '../components/blog'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { getFromDirectus } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="min-h-screen bg-purple-800">
        <Blog props={props} />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const aktuellesPage = await getFromDirectus('/items/aktuelles_page')
  const aktuelles = await getFromDirectus(
    '/items/aktuelles?filter[status][_eq]=published'
  )
  return {
    props: { aktuellesPage, aktuelles },
    revalidate: 60,
  }
}
