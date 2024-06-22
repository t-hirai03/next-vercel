import { useSession, signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  const { status } = useSession()

  if (status === 'authenticated') {
    return (
      <div>
        <button type="button" onClick={() => signOut()}>
          ログアウト
        </button>
      </div>
    )
  }
  return null
}
