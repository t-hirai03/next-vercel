import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import Title from '@/components/top/title'

import styles from './index.module.scss'
import profile from './profile'

const Profile = () => {
  return (
    <section className={styles.profile}>
      <Title strTitle="プロフィール" />
      <div className={styles.contents}>
        <div className={styles.icon}>
          <Image
            src="/top/profile.jpg"
            alt="プロフィール画像"
            width={256}
            height={226}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.data}>
            <span className={styles.label}>名前：</span>
            <span className={styles.text}>{profile.name}</span>
          </div>
          <div className={styles.data}>
            <span className={styles.label}>生年月日：</span>
            <span className={styles.text}>{profile.birthday}</span>
          </div>
          <div className={styles.data}>
            <span className={styles.label}>出身地：</span>
            <span className={styles.text}>{profile.birthPlace}</span>
          </div>
          <div className={styles.data}>
            <span className={styles.label}>趣味：</span>
            <span className={styles.text}>{profile.hobby}</span>
          </div>
          <div className={styles.icon}>
            <Link href={profile.github} passHref target="_blank">
              <FontAwesomeIcon icon={faGithub} className={styles.image} />
            </Link>
            <Link href={profile.discord} passHref target="_blank">
              <FontAwesomeIcon
                style={{ color: '#7289DA' }}
                icon={faDiscord}
                className={styles.image}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
