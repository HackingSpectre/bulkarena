import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: "2.0",
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Called when user signs in
      console.log('Sign in callback:', { user, account, profile })
      return true
    },
    async session({ session, token }) {
      // Add X user data to session
      if (token.sub) {
        session.user.id = token.sub
        // Add X-specific data if available
        session.user.username = token.username as string
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      // Store X user data in JWT token
      if (account?.provider === 'twitter' && profile) {
        token.username = (profile as any).data?.username || profile.username
        token.twitterId = profile.id
        
        // Save to our app's user storage
        if (typeof window !== 'undefined') {
          const xUser = {
            id: profile.id!,
            username: (profile as any).data?.username || profile.username || '',
            name: profile.name || '',
            avatarUrl: (profile as any).data?.profile_image_url || profile.image,
            isLinked: true
          }
          
          localStorage.setItem('bulkmind_x_user', JSON.stringify(xUser))
        }
      }
      
      return token
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt'
  }
})

export { handler as GET, handler as POST }