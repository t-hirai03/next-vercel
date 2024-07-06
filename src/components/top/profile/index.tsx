import styles from './index.module.scss'
import profile from './profile'

const Profile = () => {
  return (
    <section className={styles.profile}>
      <h2 className={styles.title}>プロフィール</h2>
      <div>
        <div>
          <div>
            <span>名前：</span>
            <span>{profile[0].name}</span>
          </div>
          <div>
            <span>生年月日：</span>
            <span>{profile[0].birthday}</span>
          </div>
          <div>
            <span>出身地：</span>
            <span>{profile[0].birthPlace}</span>
          </div>
          <div>
            <span>趣味：</span>
            <span>{profile[0].hobby}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
