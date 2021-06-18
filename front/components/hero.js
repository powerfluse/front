import { Link } from 'react-scroll'

export default function Example() {
  return (
    <main
      className="bg-cover bg-center flex flex-col justify-around h-screen px-4"
      style={{
        backgroundImage: `url(/hero.jpg)`,
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-titillium uppercase font-black text-white text-shadow-lg sm:text-6xl md:text-8xl">
          <span className="block xl:inline">Gemeinsam</span>{' '}
          <span className="block xl:inline">
            für das <span className="">Feuerwerk</span>
          </span>
        </h1>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="#" className="w-full button">
              Mitglied werden
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button>
              <Link
                to="feuerwerk"
                smooth={true}
                offset={-100}
                className="w-full button-secondary"
              >
                Mehr erfahren
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
