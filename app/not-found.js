'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-9xl font-semibold">404</h1>
      <h2 className="text-2xl font-semibold">Page not found!</h2>
      <p className="text-lg text-gray-400">
        The requested URL{' '}
        <span className="font-mono text-red-500">{pathname}</span> was not found
        on this server.
      </p>

      <Link
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        href="/"
      >
        Back
      </Link>
    </main>
  )
}
