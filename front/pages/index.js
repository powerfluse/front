import Head from 'next/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { getIndexPage } from '../lib/api'

export default function Index(props) {
  console.log(props)
  return (
    <>
      <Head>
        <title>BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <SideBySide props={props} />
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = await getIndexPage()
  return {
    props: { data },
    revalidate: 10,
  }
}
