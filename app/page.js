import Link from 'next/link'
import CardHeader from './components/CardHeader'

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <CardHeader>The Wild Oasis. Welcome to paradise.</CardHeader>

      <Link
        href="/cabins"
        className="text-blue-950 text-xl font-semibold hover:text-blue-700 hover:underline hover:text-opacity-70"
      >
        Explor Luxury Cabins
      </Link>
    </div>
  )
}
