import parse from 'html-react-parser'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import getFromDirectus from '../lib/directus'

export default function UmweltBelastungFeuerwerk(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div
        className="min-h-screen overflow-hidden break-words"
        style={{ hyphens: 'auto' }}
      >
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose-bvpk pt-24 mx-auto prose-img:shadow-none prose-img:text-center">
            {parse(props.dataUmweltPage.text)}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataUmweltPage = await getFromDirectus('/items/umwelt_page')
  return {
    props: {
      dataUmweltPage,
    },
    revalidate: 60,
  }
}
