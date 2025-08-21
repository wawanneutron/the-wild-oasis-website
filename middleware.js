import { auth as middleware } from '@/auth'
import { NextResponse } from 'next/server'

export default middleware((req) => {
  // Kalau sudah login dan coba buka /login → redirect ke /account
  if (req.auth && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/account', req.url))
  }

  // Kalau belum login dan coba buka /account → redirect ke /login
  if (!req.auth && req.nextUrl.pathname.startsWith('/account')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
})

// Lindungi /account dan kontrol akses ke /login
export const config = {
  matcher: ['/login', '/account/:path*']
}
