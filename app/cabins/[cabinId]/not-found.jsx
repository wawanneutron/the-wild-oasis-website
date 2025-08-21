'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function NotFound() {
  const params = useParams()
  const id = params?.cabinId

  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h2 className="text-4xl font-semibold">Cabin not found!</h2>
      <p className="text-lg">
        The cabin with Cabin ID{' '}
        <span className="font-mono text-red-500">{id}</span> could not be found
        :(
      </p>

      <Link
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        href="/cabins"
      >
        Back to all cabins
      </Link>
    </main>
  )
}
