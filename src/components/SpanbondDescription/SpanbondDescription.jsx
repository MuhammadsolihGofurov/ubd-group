import { useState } from 'react';
import styles from './SpanbondDescription.module.scss'
const SpanbondDescription = () => {
    const [text, setText] = useState('Узнать подробнее');
    const [isActive, setIsActive] = useState(false);

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
            <button
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            >
                <p
                    className={`${isActive ? styles.rotate : ''}`}
                >
                    {
                        text.split("").map((char, index) => (
                            <span style={{ transform: `rotate(${index * 12}deg)` }} key={index}>{char}</span>
                        ))
                    }
                </p>
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