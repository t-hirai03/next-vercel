import Image from 'next/image'
import { useSession } from 'next-auth/react'

import styles from './index.module.scss'

const MyPage = () => {
  const { data: session } = useSession()

  return (
    <div className="l-wrapper">
      <h2 className={styles.title}>ユーザー情報</h2>
      <div className={styles.profile}>
        <Image
          src={session?.user?.image ?? ''}
          alt=""
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
          className={styles.icon}
        />
        <div className={styles.info}>
          <p>
            <span className={styles.name}>{session?.user?.name}</span>さん
          </p>
          <p>{session?.user?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default MyPage
