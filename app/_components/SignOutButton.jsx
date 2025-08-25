import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid'

// cara lain pakai next-auth client side, langsung pakai ini tanpa action server onClik={signOut}
// import { signOut } from 'next-auth/react'

import { signOutAction } from '../_lib/actions' // server action

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  )
}

export default SignOutButton
