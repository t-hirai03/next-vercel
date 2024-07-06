'use client'

import './scss/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from '@/components/header'
import Meta from '@/components/meta'
import NextAuthProvider from '@/providers/NextAuth'
import { ThemeProvider } from '@/providers/NextThemes'

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
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </NextAuthProvider>
    </>
  )
}
