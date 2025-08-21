import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid'

// import { signOut } from '@/auth'
import { signOut } from 'next-auth/react'

function SignOutButton() {
  // const onSignOut = async () => await signOut({ redirectTo: '/' })

  return (
    <button
      onClick={() => signOut({ redirectTo: '/' })}
      className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full"
    >
      <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  )
}

export default SignOutButton
