import parse from 'html-react-parser'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import { getFromDirectus } from '../lib/api'

export default function Versicherung(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="min-h-screen bg-purple-900">
        <div className="prose prose-lg prose-on-purple-aktuelles pt-32 pb-12 mx-auto">
          {parse(props.dataVersicherungPage.text)}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataVersicherungPage = await getFromDirectus('/items/versicherung_page')
  return {
    props: {
      dataVersicherungPage,
    },
    revalidate: 60,
  }
}
