import Link from 'next/link'
import Head from '../components/head'
import Newsletter from '../components/newsletter'
import SideBySide from '../components/side-by-side'
import NavBar from '../components/navbar'
import Blog from '../components/blog'
import Hero from '../components/hero'
import Footer from '../components/footer'
import getFromDirectus from '../lib/directus'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <Hero />
      <div className="pt-12 pb-6 mx-4 lg:mx-14">
        <Blog props={props} />
      </div>
      <div className="flex items-center justify-center pt-6 md:pb-12">
        <Link href="/aktuelles">
          <button className="button">Schaue dir alle unsere Beiträge an</button>
        </Link>
      </div>
      <SideBySide props={props} />
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const page = await getFromDirectus('/items/index_page')
  const items = await getFromDirectus(
    '/items/aktuelles?limit=6&filter[status][_eq]=published&sort[]=-date'
  )
  return {
    props: {
      page,
      items,
    },
    revalidate: 60,
  }
}
