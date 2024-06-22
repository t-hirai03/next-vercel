import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn } from 'next-auth/react'

import styles from './index.module.scss'

// トップページのコンポーネント
const Login = () => {
  return (
    <div className="l-wrapper">
      <div className={styles.login}>
        <h1 className={styles.title}>ログイン</h1>
        <div className={styles.form}>
          <ul className={styles.list}>
            <li className={styles.item}>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                type="button"
                className={styles.button}
                onClick={() => signIn('github', {}, { prompt: 'login' })}
              >
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              </button>
              <p className={styles.text}>GitHub</p>
            </li>
            <li className={styles.item}>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                type="button"
                className={styles.button}
                onClick={() => signIn('discord', {}, { prompt: 'login' })}
              >
                <FontAwesomeIcon icon={faDiscord} className={styles.icon} />
              </button>
              <p className={styles.text}>Discord</p>
            </li>
          </ul>
          <div className={styles.original}>
            <div className={styles.item}>
              <p className={styles.header}>メールアドレス</p>
              <input
                type="text"
                placeholder="メールアドレス"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <p className={styles.header}>パスワード</p>
              <input type="password" className={styles.input} />
            </div>
            <button type="button" className={styles.button} disabled>
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
