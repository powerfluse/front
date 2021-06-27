/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import {
  UserIcon,
  OfficeBuildingIcon,
  CogIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const support = [
  {
    name: 'Mitglied werden',
    description:
      'Du lebst für das Feuerwerk und willst uns als Privatperson unterstützen',
    href: '/mitglied-werden-privat',
    icon: UserIcon,
  },
  {
    name: 'Firmenmitglied werden',
    description:
      'Du möchtest uns als Profi mit deinem Feuerwerksbetrieb unterstützten.',
    href: '/mitglied-werden-firma',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'Mitgliedschaft ändern',
    description:
      'Du bist schon Mitglied als Privatperson, willst uns nun aber als Betrieb unterstützen.',
    href: '/mitglied-werden-privat',
    icon: CogIcon,
  },
]

export default function Grid() {
  return (
    <ul className="px-4 lg:px-8 mt-24 lg:mt-48 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {support.map((s) => (
        <Link href={s.href}>
          <li
            key={s.name}
            className="col-span-1 flex flex-col text-center bg-purple-800 rounded-lg transition-all hover:shadow-xl hover:ring ring-purple-300"
          >
            <div className="flex-1 flex flex-col p-8">
              <div className="h-32 w-32 bg-purple-600 rounded-lg mx-auto flex items-center justify-center">
                <s.icon className="w-24 h-24 flex-shrink-0 text-gray-300" />
              </div>
              <h3 className="mt-6 text-gray-300 font-titillium text-xl font-bold">
                {s.name}
              </h3>
              <dl className="mt-2 flex-grow flex flex-col justify-between">
                <dt className="sr-only">s.description</dt>
                <dd className="text-gray-400 text-md font-source">
                  {s.description}
                </dd>
                <dt className="sr-only">Role</dt>
              </dl>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
