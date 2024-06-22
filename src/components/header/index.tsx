'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'

import styles from './index.module.scss'

const Header = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <Link href="/">ポートフォリオ</Link>
        </h1>
        <ul className={styles.list}>
          {status === 'authenticated' ? (
            <li className={styles.inLogin}>
              {/* <p>セッションの期限：{session.expires}</p>
            <p>ようこそ、{session.user?.name}さん</p> */}
              <Image
                src={session.user?.image ?? ``}
                alt=""
                width={32}
                height={32}
                style={{ borderRadius: '50%' }}
              />
              <button
                type="button"
                onClick={() => signOut()}
                className={styles.link}
              >
                ログアウト
              </button>
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
