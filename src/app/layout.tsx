import './scss/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider } from 'next-themes'

import Header from '@/components/header'
import Meta from '@/components/meta'
import NextAuthProvider from '@/providers/NextAuth'

config.autoAddCss = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Meta />
      <NextAuthProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </NextAuthProvider>
    </>
  )
}
