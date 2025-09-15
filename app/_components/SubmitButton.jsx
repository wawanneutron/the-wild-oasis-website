'use client'

import SpinnerMini from '@/app/_components/SpinnerMini'
import { useFormStatus } from 'react-dom'

function SubmitButton({ children, pendingLabel = 'Loading...' }) {
  const formStatus = useFormStatus()
  const isPending = formStatus.pending

  return (
    <button
      disabled={isPending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      <div className="flex gap-2 justify-between items-center">
        {isPending ? (
          <>
            <SpinnerMini />
            <span>{pendingLabel}</span>
          </>
        ) : (
          children
        )}
      </div>
    </button>
  )
}

export default SubmitButton
