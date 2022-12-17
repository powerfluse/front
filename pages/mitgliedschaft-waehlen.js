import Head from '../components/head'
import Newsletter from '../components/newsletter'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import getFromDirectus from '../lib/directus'
import Link from 'next/link'

export default function Mitglied(props) {
  return (
    <>
      <Head />
      <NavBar />
      <div className="pt-24 bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div className="xl:items-center xl:-mx-8 xl:flex">
            <div className="max-w-sm flex flex-col xl:items-start xl:mx-8">
              <h1 className="text-3xl font-medium text-gray-800 lg:text-4xl">
                Deine Mitgliedschaft beim BVPK e.V.
              </h1>
              <div className="mt-4">
                <span className="inline-block w-40 h-1 bg-bvpk-600 rounded-full" />
                <span className="inline-block w-3 h-1 mx-1 bg-bvpk-600 rounded-full" />
                <span className="inline-block w-1 h-1 bg-bvpk-600 rounded-full" />
              </div>
              <p className="mt-4 font-medium text-gray-500 ">
                Werde jetzt Mitglied beim Bundesverband für Pyrotechnik und
                Kunsfeuerwerk e.V.
              </p>
            </div>
            <div className="flex-1 xl:mx-8">
              <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                <div className="max-w-sm mx-auto border rounded-lg md:mx-4 ">
                  <div className="p-6">
                    <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl ">
                      Fördermitgliedschaft
                    </h1>
                    <p className="mt-4 text-gray-500 ">
                      Du bist Vollmitglied und unterstützt die Arbeit des BVPK
                      mit deinem Förderbeitrag.
                    </p>
                    <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl ">
                      ab €5{' '}
                      <span className="text-base font-medium">/ Monat</span>
                    </h2>
                    <Link href="/foerder">
                      <button className="mt-4 w-full button">
                        Jetzt anmelden
                      </button>
                    </Link>
                  </div>
                  <hr className="border-gray-200 " />
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Volle Mitgliedschaft in unserem Verein
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          News aus der Welt des Feuerwerks über unseren internen
                          Mitglieder-Newsletter
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Möglichkeit, die Feuerwerkversicherung des BVPK in
                          Anspruch zu nehmen
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Zugriff auf den internen Mitgliederbereich auf
                          FEUERWERK.net
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Rabatte in unseren Partner-Shops für Feuerwerk (ab
                          2023)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Du unterstützt die Ziele des Vereins mit deinem
                          Förderbeitrag
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Specials & News: Du bekommst sie als Erste:r!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-sm mx-auto border rounded-lg md:mx-4 ">
                  <div className="p-6">
                    <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl">
                      Grundmitgliedschaft
                    </h1>
                    <p className="mt-4 text-gray-500">
                      Du bist Vollmitglied im BVPK und zahlst einen niedrigen
                      Mitgliedsbeitrag.
                    </p>
                    <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl">
                      €24 <span className="text-base font-medium">/ Jahr</span>
                    </h2>
                    <Link href="/mitglied-werden">
                      <button className="mt-4 w-full button-secondary">
                        Jetzt anmelden
                      </button>
                    </Link>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Volle Mitgliedschaft in unserem Verein
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          News aus der Welt des Feuerwerks über unseren internen
                          Mitglieder-Newsletter
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Möglichkeit, die Feuerwerkversicherung des BVPK in
                          Anspruch zu nehmen
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Zugriff auf den internen Mitgliederbereich auf
                          FEUERWERK.net
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-bvpk-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-700 ">
                          Rabatte in unseren Partner-Shops für Feuerwerk (ab
                          2023)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-red-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-500 ">
                          Du unterstützt die Ziele des Vereins mit deinem
                          Förderbeitrag
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-5 h-5 text-red-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mx-4 text-gray-500 ">
                          Specials & News: Du bekommst sie als Erste:r!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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

export async function getStaticProps() {
  const data = await getFromDirectus('/items/about_page')
  return {
    props: { data },
    revalidate: 60,
  }
}
