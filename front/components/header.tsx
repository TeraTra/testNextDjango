import styles from '../styles/Header.module.css'

export default function Header(){
    return (
        <section>
            <div className={styles.secDiv}>
                <p className={styles.secP}>Home</p>
                <p className={styles.secP}>About</p>
            </div>
        </section>
    )
}