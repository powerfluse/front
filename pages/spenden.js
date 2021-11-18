import parse from 'html-react-parser'
import Script from 'next/script'
import Head from '../components/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import BlogIndex from '../components/blog-index'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { getFromDirectus } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div
        className="bg-purple-900 overflow-hidden break-words"
        style={{ hyphens: 'auto' }}
      >
        <div className="mt-8 md:mt-24 px-4 md:mx-0 md:mx-0 lg:mx-48 h-full">
          <div className="prose prose-md md:prose-lg prose-on-purple-aktuelles pt-24 ">
            {parse(props.dataSpendenPage.text)}
          </div>
        </div>
      </div>
      <div className="bg-purple-900">
        <div className="mt-24 px-4 md:mx-0 md:mx-0 lg:mx-48 h-full min-h-screen">
          <div id="fbIframeDiv">
            <Script src="https://secure.fundraisingbox.com/app/paymentJS?hash=osddg4ho9r4axvya" />
          </div>
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
  const dataSpendenPage = await getFromDirectus('/items/spenden_page')
  return {
    props: {
      dataSpendenPage,
    },
    revalidate: 60,
  }
}
