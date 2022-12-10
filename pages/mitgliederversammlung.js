import parse from 'html-react-parser'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import getFromDirectus from '../lib/directus'

export default function Mitgliederversammlung(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="min-h-screen">
        <div className="prose-bvpk pt-32 pb-12 mx-auto">
          {parse(props.dataPage.text)}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataPage = await getFromDirectus('/items/petition_page')
  return {
    props: {
      dataPage,
    },
    revalidate: 60,
  }
}
