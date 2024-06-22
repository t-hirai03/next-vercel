import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import GithubProvider from 'next-auth/providers/github'

// eslint-disable-next-line
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/login',
  },
  callbacks: {
    /* eslint-disable-next-line */
    redirect({ url, baseUrl }) {
      return '/customers/mypage'
    },
  },
})

export { handler as GET, handler as POST }
