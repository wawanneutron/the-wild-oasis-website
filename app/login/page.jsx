'use client'

import SignInButton from '../_components/SignInButton'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-3xl mb-4">Login</h1>
      <SignInButton />
    </div>
  )
}
