import parse from 'html-react-parser'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import { getFromDirectus } from '../lib/api'

export default function Positionen(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="min-h-screen bg-purple-900">
        <div className="text-center prose prose-lg prose-on-purple-aktuelles pt-32 mx-auto">
          {parse(props.dataPositionenPage.text)}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataPositionenPage = await getFromDirectus('/items/positionen_page')
  return {
    props: {
      dataPositionenPage,
    },
    revalidate: 60,
  }
}
