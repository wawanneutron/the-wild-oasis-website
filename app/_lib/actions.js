'use server'

import { auth, signIn, signOut } from '@/app/_lib/auth'
import { supabase } from './supabase'
import { revalidatePath } from 'next/cache'
import { getBookings } from './data-service'

export const signInAction = async () =>
  await signIn('google', { redirectTo: '/account' })

export const signOutAction = async () => await signOut({ redirectTo: '/' })

export const updateGuest = async (formData) => {
  const session = await auth()
  if (!session) throw new Error('You must be logged in to update your profile.')

  const nationalID = formData.get('nationalID')
  const [nationality, countryFlag] = formData.get('nationality').split('%')

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error('Please provide a valid national ID')

  if (!nationality || !countryFlag)
    throw new Error('Please provide a valid nationalitu dan country flag.')

  const updateData = { nationalID, nationality, countryFlag }

  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId)
    .select()
    .single()

  if (error) {
    console.error('Supabase error:', error)
    throw new Error('Guest could not be updated')
  }

  revalidatePath('/account/profile')
}

export const deleteReservation = async (bookingId) => {
  const session = await auth()
  if (!session) throw new Error('You must be logged in to update your profile.')

  const { guestId } = session.user
  const bookings = await getBookings(guestId)

  const guestBookingIds = bookings.map((b) => b.id)

  if (!guestBookingIds.includes(guestId))
    throw new Error('You are not allowed to delete this booking.')

  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId)

  if (error) throw new Error('Booking could not be deleted')

  revalidatePath('/account/reservations')
}
