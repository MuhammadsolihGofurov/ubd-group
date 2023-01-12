import styles from './SpanbondDescription.module.scss'
const SpanbondDescription = () => {
    return (
        <div className={styles.container}>
            <h3>Что такое спанбонд?</h3>
            <div className={styles.description}>
                <p>
                    Спанбонд (англ. spunbond) — название технологии производства нетканого материала из расплава полимера фильерным способом. В профессиональной области так называют и сам материал, который производят по описанной технологии.
                </p>
                <p>
                    Наиболее часто для производства «спанбонда» используется полипропилен, поскольку он позволяет получать наиболее плотное распределение волокон в холсте и обеспечивает высокую выработку волокон в перерасчёте на килограмм сырья.
                </p>
                <p>
                    Толщина спанбонда определяется его назначением и способом производства, так как от толщины зависит его воздухопроницаемость, жёсткость, теплоизоляционные свойства.
                </p>
            </div>
            <button>
                <svg
                    viewBox='0 0 24 24'
                    width={32}
                    height={32}
                >
                    <use xlinkHref='#arrow-outward'></use>
                </svg>
            </button>
        </div>
    )
}

export default SpanbondDescription;