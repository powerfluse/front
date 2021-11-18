import { Link } from 'react-scroll'
import {
  UserIcon,
  // OfficeBuildingIcon,
  // CogIcon,
  MenuIcon,
  HeartIcon,
  XIcon,
} from '@heroicons/react/outline'

export default function Hero() {
  return (
    <main
      className="bg-cover bg-center flex flex-col justify-around h-screen px-4"
      style={{
        backgroundImage: `url(/hero.jpg)`,
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-titillium uppercase font-black text-white text-shadow-lg md:text-8xl">
          <span className="block xl:inline">Gemeinsam</span>{' '}
          <span className="block xl:inline">
            für das <span className="">Feuerwerk</span>
          </span>
        </h1>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="/mitglied-werden" className="w-full button">
              Mitglied werden
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="/spenden" className="w-full button-secondary">
              Spenden
              <HeartIcon className="ml-2 -mr-2 h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
