import parse from 'html-react-parser'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import { getFromDirectus } from '../lib/api'

export default function Impressum(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div
        className="min-h-screen bg-purple-900 overflow-hiden break-words"
        style={{ hyphens: 'auto' }}
      >
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-md md:prose-lg prose-on-purple-aktuelles pt-24 mx-auto">
            {parse(props.dataImpressumPage.text)}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataImpressumPage = await getFromDirectus('/items/impressum_page')
  return {
    props: {
      dataImpressumPage,
    },
    revalidate: 60,
  }
}
