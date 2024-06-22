'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

import { queryClient } from '@/lib/react-query'

const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}

export default NextAuthProvider
