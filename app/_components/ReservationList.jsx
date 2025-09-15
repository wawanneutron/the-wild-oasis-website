'use client'

import { useOptimistic } from 'react'
import ReservationCard from './ReservationCard'
import { deleteBooking } from '../_lib/actions'

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBooking, bookingId) => {
      return currentBooking.filter((booking) => booking.id !== bookingId)
    }
  )

  const handleDelete = async (bookingId) => {
    optimisticDelete(bookingId)
    await deleteBooking(bookingId)
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  )
}

export default ReservationList
