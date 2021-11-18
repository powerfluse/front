import Head from '../components/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import BlogIndex from '../components/blog-index'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Script from 'next/script'
import { getFromDirectus } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="mt-24 h-screen bg-purple-900">
        <div id="fbIframeDiv" className="h-96 mx-5 md:mx-8">
          <Script src="https://secure.fundraisingbox.com/app/paymentJS?hash=osddg4ho9r4axvya" />
          <a target="_blank" href="https://www.fundraisingbox.com">
            <img
              src="https://secure.fundraisingbox.com/images/FundraisingBox-Logo-Widget.png"
              alt="FundraisingBox Logo"
              border="0"
            />
          </a>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const dataIndexPage = await getFromDirectus('/items/index_page')
  const dataAktuelles6 = await getFromDirectus(
    '/items/aktuelles?limit=6&filter[status][_eq]=published&sort[]=-date'
  )
  return {
    props: {
      dataIndexPage,
      dataAktuelles6,
    },
    revalidate: 60,
  }
}
