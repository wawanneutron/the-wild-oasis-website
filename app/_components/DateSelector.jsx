'use client'

import { isWithinInterval } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { useReservation } from './ReservationContext'

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  )
}

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation()

  // CHANGE
  const regularPrice = 23
  const discount = 23
  const numNights = 23
  const cabinPrice = 23

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings

  const handleSelect = (selectedRange) => {
    if (selectedRange === undefined) return
    setRange(selectedRange)
  }

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="place-self-center pt-12"
        mode="range"
        min={minBookingLength}
        max={maxBookingLength}
        onSelect={handleSelect} // Write the state if selected a date
        selected={range} // Read the state
        // // OLD API
        // fromMonth={new Date()}
        // fromDate={new Date()}
        // toYear={new Date().getFullYear() + 5}
        // BASED ON NEW API
        startMonth={new Date()}
        startDate={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 11)} // December of the year 5 years from now
        captionLayout="dropdown"
        numberOfMonths={2} // Show only 2 months
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{' '}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default DateSelector
