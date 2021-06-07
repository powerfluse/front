import Head from 'next/head'
import Blog from '../components/blog'
import NavBar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { getFirst30Posts } from '../lib/api'

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />
      <Blog props={props.posts} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getFirst30Posts()
  return {
    props: { posts },
  }
}
