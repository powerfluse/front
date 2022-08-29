import { HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import heroPic from '../public/hero.jpg'

export default function Hero() {
  return (
    <main className="bg-cover bg-center flex flex-col justify-around h-screen px-4">
      <Image
        className="object-cover rounded-none"
        src={heroPic}
        layout="fill"
        alt="Bundesverband für Pyrotechnik und Kunstfeuerwerk"
        priority
      />
      <div className="text-center z-10">
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
              <HeartIcon className="ml-1 -mr-2 h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
