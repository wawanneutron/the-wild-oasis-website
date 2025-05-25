'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathName = usePathname()

  const links = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/cabins',
      label: 'Cabins'
    },
    {
      href: '/about',
      label: 'About'
    },
    {
      href: '/account',
      label: 'Your Account'
    }
  ]

  return (
    <ul className="flex justify-end bg-sky-900 gap-6 px-4 py-6">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={` text-xl hover:text-black hover:underline hover:text-opacity-70
              ${
                pathName === href
                  ? 'text-pink-500 underline font-bold'
                  : 'text-white font-medium'
              }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
