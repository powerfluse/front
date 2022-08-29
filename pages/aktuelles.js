import Head from '../components/head'
import Blog from '../components/blog'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'
import getFromDirectus from '../lib/directus'

export default function Aktuelles(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="relative pt-24 pb-24 px-4 sm:px-6 md:pt-28 lg:pt-32 lg:pb-28 lg:px-8">
        <Blog props={props} />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const page = await getFromDirectus('/items/aktuelles_page')
  const items = await getFromDirectus(
    '/items/aktuelles?filter[status][_eq]=published&filter[category][_neq]=pressemitteilung'
  )
  return {
    props: { page, items },
    revalidate: 60,
  }
}
