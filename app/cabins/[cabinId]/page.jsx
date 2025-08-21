import CabinDetail from '@/app/_components/CabinDetail'
import Reservation from '@/app/_components/Reservation'
import Spinner from '@/app/_components/Spinner'
import { getCabin } from '@/app/_lib/data-service'
import { Suspense } from 'react'

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId)

  return {
    title: `Cabin ${name}`
  }
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId)

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <CabinDetail cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-400 mb-10">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  )
}
