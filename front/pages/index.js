import Head from '../components/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import BlogIndex from '../components/blog-index'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { getAktuelles6, getIndexPage } from '../lib/api'

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
  const dataIndexPage = await getIndexPage()
  const dataAktuelles6 = await getAktuelles6()
  return {
    props: {
      dataIndexPage,
      dataAktuelles6,
    },
    revalidate: 60,
  }
}
