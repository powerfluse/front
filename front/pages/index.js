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
        <title>BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-source text-5xl">Test</div>
      <NavBar />
      <Hero />
      <SideBySide />
      <Newsletter />
      <Footer />
    </>
  )
}
