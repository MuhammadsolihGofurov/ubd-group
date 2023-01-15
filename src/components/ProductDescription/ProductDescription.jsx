import { useState } from "react";

import styles from './ProductDescription.module.scss'

const ProductDescription = () => {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className={styles.container}>
            <h2>Простыни на кушетку</h2>
            <div className={isHidden ? `${styles.hide}` : ''}>
                <p>Спанбонд – это современный, экологически чистый материал на основе волокон полипропилена. Идя в ногу со временем, наша фирма также разработала технологический процесс изготовления промосумок. Промосумки, действительно являются хорошей альтернативой полиэтиленовым пакетам, в силу своих прочностных характеристик и более качественному визуальному восприятию. Промосумки из спанбонда в ближайшем будущем будут лежать на кассах в продовольственных магазинах, в них будут упаковывать одежду, косметику, обувь и игрушки.</p>
                <button onClick={() => { setIsHidden(!isHidden) }}>
                    {
                        isHidden ? 'Развернуть...' : 'Скрыть...'
                    }
                </button>
            </div>
        </div>
    );
}

export default ProductDescription;