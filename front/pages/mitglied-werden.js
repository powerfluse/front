import Head from 'next/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import BlogIndex from '../components/blog-index'
import Grid from '../components/grid'
import Footer from '../components/footer'
import { getAktuelles10, getIndexPage } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head>
        <title>BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="bg-purple-900 h-screen flex flex-col justify-between">
        <Grid />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
}
