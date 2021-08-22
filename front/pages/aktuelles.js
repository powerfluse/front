import Head from '../components/head'
import Blog from '../components/blog'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { getAktuellesPage, getAktuellesAll } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="min-h-screen bg-purple-800">
        <Blog props={props} />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const aktuellesPage = await getAktuellesPage()
  const aktuelles = await getAktuellesAll()
  return {
    props: { aktuellesPage, aktuelles },
    revalidate: 60,
  }
}
