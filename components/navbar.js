import { Popover, Transition } from '@headlessui/react'
import {
  UserIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  // ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// TODO add donation item
const support = [
  {
    name: 'Mitglied werden',
    description:
      'Du lebst für das Feuerwerk und willst uns als Privatperson unterstützen',
    href: '/mitglied-werden',
    icon: UserIcon,
  },
  {
    name: 'Spenden',
    description:
      'Du möchtest uns als Profi mit deinem Feuerwerksbetrieb unterstützten.',
    href: '/spenden',
    icon: HeartIcon,
  },
  // {
  //   name: 'Mitgliedschaft ändern',
  //   description:
  //     'Du bist schon Mitglied als Privatperson, willst uns nun aber als Betrieb unterstützen.',
  //   href: '/mitglied-werden',
  //   icon: CogIcon,
  // },
]

const navigation = [
  { name: 'Der BVPK', href: '/ueber-uns', class: 'text-gray-700' },
  { name: 'Aktuelles', href: '/aktuelles', class: 'text-gray-700' },
  { name: 'Presse', href: '/presse', class: 'text-gray-700' },
  {
    name: 'Petition',
    href: 'https://www.change.org/p/schutz-und-f%C3%B6rderung-der-feuerwerkskultur',
    class: 'text-gray-700',
  },
  { name: 'Sicherheit', href: '/sicher-und-bunt', class: 'text-gray-700' },
  {
    name: 'Umwelt',
    href: '/umweltbelastung-feuerwerk',
    class: 'text-gray-700',
  },
  { name: 'Positionen', href: '/positionen', class: 'text-gray-700' },
  { name: 'Kontakt', href: '/kontakt', class: 'text-gray-700' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  // Setup scroll position capture
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Use scrollPosition to set shadow variable
  const [shadow, setShadow] = useState('shadow-none')
  useEffect(() => {
    if (scrollPosition === 0) {
      setShadow('shadow-none')
    } else {
      setShadow('shadow-xl')
    }
  })

  // Setup page position
  const router = useRouter()
  useEffect(() => {
    for (let i = 0; i < navigation.length; i++) {
      if (navigation[i].href === router.pathname) {
        navigation[i].class = 'text-bvpk-600'
        console.log(navigation)
      }
    }
  }, [router])

  // Return the component
  return (
    <div
      className={`absolute bg-white w-full z-20 transition transition-all duration-300 ${shadow}`}
    >
      <header>
        <Popover className="relative">
          {({ open }) => (
            <>
              <div className="flex justify-between items-center max-w-full mx-auto px-4 py-4 lg:justify-start lg:space-x-10 md:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex lg:justify-start lg:flex-grow-0 w-24 h-18 items-center">
                  <Link href="/">
                    <a>
                      <span className="sr-only">
                        Bundesverband für Pyrotechnik und Kunstfeuerwerk
                      </span>
                      <img
                        className="h-8 w-auto shadow-none"
                        src="/logo-purple.svg"
                        alt="BVPK Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/* Mobile Hamburger Menu */}
                <div className="-mr-2 -my-2 lg:hidden">
                  <Popover.Button className="bg-white rounded-md p-1 inline-flex items-center justify-center text-bvpk-800 hover:text-bvpk-300">
                    <span className="sr-only">Menü offnen</span>
                    <Bars3Icon className="h-10 w-10" aria-hidden="true" />
                  </Popover.Button>
                </div>
                {/* Links */}
                <Popover.Group
                  as="nav"
                  className="hidden lg:flex lg:justify-start space-x-6"
                  style={{ marginLeft: '0.5em' }}
                >
                  {navigation.map((item) => {
                    if (item.name == 'Petition') {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`${item.class} font-source font-bold duration-300 hover:text-bvpk-300`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </a>
                      )
                    } else {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`${item.class} font-source font-bold duration-300 hover:text-bvpk-300`}
                        >
                          {item.name}
                        </a>
                      )
                    }
                  })}
                  ;{/* Dropdown Menu */}
                  {/* <Popover className="relative"> */}
                  {/*   {({ open }) => ( */}
                  {/*     <> */}
                  {/*       <Popover.Button */}
                  {/*         className={classNames( */}
                  {/*           open ? 'text-gray-300' : 'text-white', */}
                  {/*           'group rounded-md inline-flex items-center text-shadow-lg text-lg font-source font-bold hover:text-bvpk-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' */}
                  {/*         )} */}
                  {/*       > */}
                  {/*         <span>Unterstützen</span> */}
                  {/*         <ChevronDownIcon */}
                  {/*           className={classNames( */}
                  {/*             open ? 'text-bvpk-600' : 'text-bvpk-600', */}
                  {/*             'ml-2 h-5 w-5 group-hover:text-bvpk-300' */}
                  {/*           )} */}
                  {/*           aria-hidden="true" */}
                  {/*         /> */}
                  {/*       </Popover.Button> */}
                  {/*       <Transition */}
                  {/*         show={open} */}
                  {/*         as={Fragment} */}
                  {/*         enter="transition ease-out duration-200" */}
                  {/*         enterFrom="opacity-0 translate-y-1" */}
                  {/*         enterTo="opacity-100 translate-y-0" */}
                  {/*         leave="transition ease-in duration-150" */}
                  {/*         leaveFrom="opacity-100 translate-y-0" */}
                  {/*         leaveTo="opacity-0 translate-y-1" */}
                  {/*       > */}
                  {/*         <Popover.Panel */}
                  {/*           static */}
                  {/*           className="absolute z-20 -ml-4 mt-3 transform w-screen max-w-sm lg:max-w-xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" */}
                  {/*         > */}
                  {/*           <div className="rounded-lg bg-bvpk-800 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"> */}
                  {/*             <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-1"> */}
                  {/*               {support.map((item) => ( */}
                  {/*                 <a */}
                  {/*                   key={item.name} */}
                  {/*                   href={item.href} */}
                  {/*                   className="-m-3 p-3 flex items-start rounded-lg hover:bg-bvpk-900" */}
                  {/*                 > */}
                  {/*                   <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-bvpk-600 text-white sm:h-12 sm:w-12"> */}
                  {/*                     <item.icon */}
                  {/*                       className="h-6 w-6" */}
                  {/*                       aria-hidden="true" */}
                  {/*                     /> */}
                  {/*                   </div> */}
                  {/*                   <div className="ml-4"> */}
                  {/*                     <p className="text-base font-bold font-source text-white"> */}
                  {/*                       {item.name} */}
                  {/*                     </p> */}
                  {/*                     <p className="mt-1 text-md font-source text-gray-400"> */}
                  {/*                       {item.description} */}
                  {/*                     </p> */}
                  {/*                   </div> */}
                  {/*                 </a> */}
                  {/*               ))} */}
                  {/*             </div> */}
                  {/*           </div> */}
                  {/*         </Popover.Panel> */}
                  {/*       </Transition> */}
                  {/*     </> */}
                  {/*   )} */}
                  {/* </Popover> */}
                </Popover.Group>
                <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
                  <a href="/mitglied-werden" className="button">
                    Mitglied werden
                  </a>
                  <a href="/spenden" className="ml-4 button-secondary">
                    Spenden
                    <HeartIcon
                      className="ml-1 -mr-2 h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                >
                  <div className="rounded-lg shadow-lg bg-bvpk-900 divide-y-2 divide-bvpk-800">
                    <div className="px-4 py-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="/logo.svg"
                            alt="BVPK Logo"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-bvpk-800 rounded-md p-1 inline-flex items-center justify-center text-white hover:text-bvpk-300">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                              className="h-10 w-10"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid grid-cols-1 gap-7">
                          {support.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-lg hover:bg-bvpk-800"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-bvpk-600 text-white">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 font-source text-base font-bold text-white hover:text-bvpk-300">
                                {item.name}
                              </div>
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <div className="py-6 px-5">
                      <div className="grid grid-cols-1 gap-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="font-source font-bold text-white hover:text-bvpk-300"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {/* <div className="mt-6"> */}
                      {/*   <a */}
                      {/*     href="#" */}
                      {/*     className="w-full md:max-w-lg flex items-center justify-around px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-bvpk-600 hover:bg-bvpk-900" */}
                      {/*   > */}
                      {/*     Mitglied werden */}
                      {/*   </a> */}
                      {/* </div> */}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </header>
    </div>
  )
}
