import NavBar from '../../components/navbar.js'
import { getAktuellesAll, getAktuellesSingle } from '../../lib/api'
import { CameraIcon } from '@heroicons/react/solid'
import parse from 'html-react-parser'

export default function Post(props) {
  const API_ASSET_URL = process.env.DIRECTUS_URL + '/assets/'
  console.log('LOGGING: ', props.body)
  return (
    <>
      <NavBar />
      <div className="pt-12 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                AKTUELLES
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {props.title}
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={API_ASSET_URL + props.image}
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      Bild von{' '}
                      <a
                        className="underline hover:text-indigo-600"
                        href={props.imagelink}
                      >
                        {props.imageattribution}
                      </a>
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-lg max-w-prose mx-auto lg:max-w-none">
                {parse(props.body.toString())}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = await getAktuellesSingle(params.slug)

  return {
    props: { ...data[0] },
  }
}

export async function getStaticPaths() {
  const aktuelles = await getAktuellesAll()
  return {
    paths: aktuelles?.map((a) => `/aktuelles/${a.slug}`) || [],
    fallback: true,
  }
}
