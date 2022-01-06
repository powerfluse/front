import Image from 'next/image'
import Head from '../components/head'
import Newsletter from '../components/newsletter'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import parse from 'html-react-parser'
import { getFromDirectus } from '../lib/api'
import aboutPic from '../public/ueber.jpg'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="relative bg-purple-900 pt-12">
        <div className="lg:absolute lg:inset-0">
          <div className="relative lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <Image
              className="pt-20 lg:pt-24 h-56 w-full object-cover lg:absolute lg:h-full"
              src={aboutPic}
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pt-4 lg:pl-8">
            <div className="prose prose-lg prose-on-purple max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              {parse(props.data.text)}
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = await getFromDirectus('/items/about_page')
  return {
    props: { data },
    revalidate: 60,
  }
}
