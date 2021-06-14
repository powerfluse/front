import Head from 'next/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { getAktuellesAll } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <SideBySide />
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const aktuelles = await getAktuellesAll()
  return {
    props: { aktuelles },
  }
}
