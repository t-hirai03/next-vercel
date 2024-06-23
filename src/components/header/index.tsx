'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import styles from './index.module.scss'

const Header = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer && session?.user) {
      // dataLayerにユーザー情報を送信
      window.dataLayer.push({
        event: 'userInformation',
        user_name: session?.user?.name,
        user_email: session?.user?.email,
        user_image: session?.user?.image,
      })

      // cookieにユーザー情報を保存
      document.cookie = `user_name=${session?.user?.name}`
    } else {
      // cookieに保存されたユーザー情報を削除
      document.cookie = `user_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    }
  }, [session])

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <Link href="/">ポートフォリオ</Link>
        </h1>
        <ul className={styles.list}>
          {status === 'authenticated' ? (
            <li className={styles.inLogin}>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {' '}
                  <Image
                    src={session.user?.image ?? ``}
                    alt=""
                    width={32}
                    height={32}
                    style={{ borderRadius: '50%' }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full md:w-56">
                  <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/customers/mypage" className={styles.link}>
                      マイページ
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button
                      type="button"
                      onClick={() => signOut()}
                      className={styles.link}
                    >
                      ログアウト
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ) : (
            router.pathname !== '/login' && (
              <li className={styles.notLogin}>
                <Link href="/login" className={styles.link}>
                  ログイン
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
