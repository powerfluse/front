import parse from 'html-react-parser'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import getFromDirectus from '../lib/directus'

export default function SicherUndBunt(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="min-h-screen">
        <div className="prose-bvpk-wide text-gray-700 pt-32 pb-12 mx-auto prose-img:shadow-none prose-img:text-center">
          {parse(props.dataPage.text)}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataPage = await getFromDirectus('/items/sicher_und_bunt_page')
  return {
    props: {
      dataPage,
    },
    revalidate: 60,
  }
}
