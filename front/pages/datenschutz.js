import parse from 'html-react-parser'
import Head from 'next/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import { getDatenschutzPage } from '../lib/api'

export default function Datenschutz(props) {
  return (
    <>
      <Head>
        <title>BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="min-h-screen bg-purple-900">
        <div className="prose prose-lg prose-on-purple-aktuelles pt-24 mx-auto">
          {parse(props.dataDatenschutzPage.text)}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataDatenschutzPage = await getDatenschutzPage()
  return {
    props: {
      dataDatenschutzPage,
    },
    revalidate: 60,
  }
}
