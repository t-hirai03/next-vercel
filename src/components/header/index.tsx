import Link from 'next/link'
import { linkData } from './linkData'
import styles from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>ポートフォリオ</h1>
                <ul className={styles.list}>
                    {linkData.map((data, index) => (
                        <li className={styles.item} key={index}>
                            <Link href={data.url} className={styles.link}>
                                <FontAwesomeIcon icon={data.icon} className={styles.icon} />
                                <p className={styles.text}>{data.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;