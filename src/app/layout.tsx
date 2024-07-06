'use client'

import './scss/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider as NextThemesProvider } from 'next-themes' // eslint-disable-line import/no-extraneous-dependencies

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
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <main>{children}</main>
        </NextThemesProvider>
      </NextAuthProvider>
    </>
  )
}
