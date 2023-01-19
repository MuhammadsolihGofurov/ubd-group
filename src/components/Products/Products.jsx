import data from '../../../db.json';
import ImageComponent from '../ImageComponent/ImageComponent';

import styles from './Products.module.scss';

const Products = () => (
    <div className={styles.container} id='products'>
        <h2>Продукция</h2>
        <div className={styles.products}>
            {
                data.products?.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <div className={styles.logo}>
                            <svg
                                viewBox='0 0 24 24'
                                width={40}
                                height={40}
                                stroke="#FB4A7B"
                                fill="none"
                            >
                                <use xlinkHref={`#${product.logo}`}></use>
                            </svg>
                        </div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))
            }
        </div>

        <div className={styles.vector1}>
            <ImageComponent
                src={'/images/main-vector-1.png'}
            />
        </div>

        <div className={styles.vector2}>
            <ImageComponent
                src={'/images/main-vector-2.png'}
            />
        </div>
    </div>
)

export default Products;