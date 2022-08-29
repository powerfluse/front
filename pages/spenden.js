import parse from 'html-react-parser'
import Script from 'next/script'
import Head from '../components/head'
import Newsletter from '../components/newsletter'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import getFromDirectus from '../lib/directus'

const goFundMe = `!function(t,e){try{function n(t){var n=e.createElement("iframe");return n.setAttribute("class","gfm-embed-iframe"),n.setAttribute("width","100%"),n.setAttribute("height","540"),n.setAttribute("frameborder","0"),n.setAttribute("scrolling","no"),n.setAttribute("src",t),n}t.addEventListener("message",function(t){t.data&&((function(t){return[].slice.call(e.getElementsByClassName("gfm-embed-iframe")).filter(function(e){return e.contentWindow===t.source})[0]}(t)).height=t?.data?.offsetHeight)},!1),e.addEventListener("DOMContentLoaded",function(){for(var t=e.getElementsByClassName("gfm-embed"),r=0;r<t.length;r++){var i=n(t[r].getAttribute("data-url"));t[r].appendChild(i)}})}catch(t){}}(window,document);`

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="overflow-hidden break-words" style={{ hyphens: 'auto' }}>
        <div className="mt-8 md:mt-24 px-4 md:mx-0 lg:mx-48 h-full">
          <div className="prose-bvpk pt-24 ">
            {parse(props.dataSpendenPage.text)}
          </div>
        </div>
        <div
          id="donate"
          className="gfm-embed md:mx-0 lg:mx-48 max-w-md px-5 py-8"
          data-url="https://www.gofundme.com/f/bvpk-silvester/widget/medium/"
        ></div>
        <Script dangerouslySetInnerHTML={{ __html: `${goFundMe}` }} />`
      </div>
      <div className="mt-8 px-4 md:mx-0 md:mx-0 lg:mx-48 h-full min-h-screen">
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
