import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
    })
  ]
}

export const {
  auth,
  handlers: { GET, POST }
} = NextAuth(authConfig)
