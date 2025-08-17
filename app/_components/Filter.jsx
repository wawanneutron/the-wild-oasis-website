'use client'

import { filters } from '@/app/data/index'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function Filter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()

  const handleFilter = (capacity) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('capacity', capacity)
    router.replace(`${pathName}?${params.toString()}`, { scroll: false })
  }

  const activeCapacity = searchParams.get('capacity') || 'all'

  return (
    <div className="border border-primary-800 rounded">
      {filters.map((filter, index) => {
        const isActive = activeCapacity === filter.capacity

        return (
          <Button
            filter={filter}
            handleFilter={handleFilter}
            activeFilter={isActive}
            key={index}
          >
            {filter.name}
          </Button>
        )
      })}
    </div>
  )
}

function Button({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      className={`px-5 py-2 rounded-full transition-colors ${
        activeFilter ? 'bg-primary-700 text-primary-50' : 'hover:bg-primary-700'
      }`}
      onClick={() => handleFilter(filter.capacity)}
    >
      {children}
    </button>
  )
}

export default Filter
