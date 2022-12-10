import Image from 'next/image'
import NavBar from '../../components/navbar'
import Head from '../../components/head'
import parse, { attributesToProps } from 'html-react-parser'
import Newsletter from '../../components/newsletter'
import Footer from '../../components/footer'
import { CameraIcon } from '@heroicons/react/24/solid'
import getFromDirectus from '../../lib/directus'

export default function Post(props) {
  const baseURL = 'https://cms.bvpk.org'
  const assetURL = `${baseURL}/assets/`

  return (
    <>
      <NavBar />
      <Head />
      <div className="pt-12 min-h-screen overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-bvpk-800 font-titillium tracking-wide font-bold uppercase">
                {props.category}
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-titillium text-gray-700 font-bold sm:text-4xl">
                {props.title}
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="relative aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={assetURL + props.image}
                      alt={props.title}
                      width={1184}
                      height={1376}
                    />
                  </div>
                  {props.imageattribution && (
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <CameraIcon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">
                        Bild von{' '}
                        <a
                          className="underline font-bold decoration-bvpk-300"
                          href={props.imagelink || '/impressum'}
                        >
                          {props.imageattribution}
                        </a>
                      </span>
                    </figcaption>
                  )}
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-lg prose-on-bvpk-aktuelles max-w-prose mx-auto lg:max-w-none">
                {props.body
                  ? parse(props.body.toString(), {
                      replace: (domNode) => {
                        if (domNode.attribs && domNode.name === 'img') {
                          const props = attributesToProps(domNode.attribs)
                          return <Image {...props} />
                        }
                      },
                    })
                  : 'There has been an error. Sorry about that'}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = await getFromDirectus(
    `/items/aktuelles?filter[slug][_eq]=${params.slug}`
  )
  if (Object.entries(data).length === 0) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: { ...data[0] },
      revalidate: 60,
    }
  }
}

export async function getStaticPaths() {
  const aktuelles = await getFromDirectus(
    '/items/aktuelles?filter[status][_eq]=published'
  )
  return {
    paths: aktuelles?.map((a) => `/aktuelles/${a.slug}`) || [],
    fallback: true,
  }
}
