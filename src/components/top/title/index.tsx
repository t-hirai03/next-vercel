import styles from './index.module.scss'

// propsの型定義
type Props = {
  strTitle: string
}

const Title = (props: Props) => {
  const { strTitle } = props

  return <h2 className={styles.title}>{strTitle}</h2>
}

export default Title
