import Head from '../components/head'
import Blog from '../components/blog-index'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'
import getFromDirectus from '../lib/directus'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="relative pt-24 pb-24 px-4 sm:px-6 md:pt-28">
        <Blog props={props} />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const page = await getFromDirectus('/items/presse_page')
  const items = await getFromDirectus(
    '/items/aktuelles?filter[status][_eq]=published&filter[category][_eq]=pressemitteilung'
  )
  return {
    props: { page, items },
    revalidate: 60,
  }
}
