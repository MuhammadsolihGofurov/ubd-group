import styles from "./Headline.module.scss"

const Headline = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
            </div>
            <div className={styles.description}>
                <h1>UBD поможет вам с подбором спанбонда</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Узнать подробнее</button>
            </div>
        </div>
    )
}

export default Headline;