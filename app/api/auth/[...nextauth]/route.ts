import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import { NextAuthOptions } from 'next-auth'

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      username?: string
    }
  }
  
  interface Profile {
    id?: string
    username?: string
    data?: {
      username?: string
      profile_image_url?: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    username?: string
    twitterId?: string
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: "2.0",
      authorization: {
        url: "https://twitter.com/i/oauth2/authorize",
        params: {
          scope: "tweet.read users.read offline.access",
          code_challenge_method: "S256",
        },
      },
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('Sign in callback:', { user, account, profile })
      return true
    },
    async redirect({ url, baseUrl }) {
      // Always redirect back to the home page after successful login
      if (url.startsWith(baseUrl)) return url
      if (url.startsWith("/")) return `${baseUrl}${url}`
      return baseUrl
    },
    async session({ session, token }) {
      // Add X user data to session
      if (token.sub && session.user) {
        session.user.id = token.sub
        session.user.username = token.username as string
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      // Store X user data in JWT token
      if (account?.provider === 'twitter' && profile) {
        token.username = profile.data?.username || profile.username
        token.twitterId = profile.id
        
        console.log('JWT callback - profile data:', profile)
      }
      
      return token
    }
  },
  pages: {
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt'
  },
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }