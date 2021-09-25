import Head from '../components/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import BlogIndex from '../components/blog-index'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { getFromDirectus } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <Hero />
      <SideBySide props={props} />
      <BlogIndex props={props} />
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataIndexPage = await getFromDirectus('/items/index_page')
  const dataAktuelles6 = await getFromDirectus(
    '/items/aktuelles?limit=6&filter[status][_eq]=published&sort[]=-date'
  )
  return {
    props: {
      dataIndexPage,
      dataAktuelles6,
    },
    revalidate: 60,
  }
}
