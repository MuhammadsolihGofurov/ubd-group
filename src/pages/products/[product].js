import { useEffect, useState } from 'react';
import Head from 'next/head';

import ImageComponent from '../../components/ImageComponent/ImageComponent';
import OrderForm from '../../components/OrderForm/OrderForm';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ProductsMenu from '../../components/ProductsMenu/ProductsMenu';

import styles from './Products.module.scss'
import Footer from '../../components/Footer/Footer';

const ProductPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Продукты</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.image}>
                    <ImageComponent
                        src={'/images/image 20.png'}
                        alt=""
                    />
                </div>

                <div className={styles.content}>
                    <div className={styles.contentColumn1}>
                        <button
                            className={styles.categoriesButton}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <h3>Категории</h3>
                            <svg
                                viewBox='0 0 24 24'
                                width={24}
                                height={24}
                                stroke="#242424"
                                strokeWidth="0.3"
                            >
                                <use xlinkHref='#options'></use>
                            </svg>
                        </button>
                        <ProductDescription />
                        <div className={styles.imageColumns}>
                            <div className={styles.column1}>
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                            </div>
                            <div className={styles.column2}>
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                            </div>
                            <div className={styles.column3}>
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                                <ImageComponent src="/images/Furniture.png" />
                            </div>
                        </div>
                        <Footer show={true} />
                    </div>

                    <div className={styles.contentColumn2}>
                        <div className={styles.categories}>
                            <ul>
                                <li className={styles.active}>Простыни на кушетки</li>
                                <li>Медицинские халаты</li>
                                <li>Медицинские маски</li>
                                <li>Бахилы</li>
                                <li>Шапочки</li>
                            </ul>
                        </div>
                        <OrderForm />
                        <div className={styles.columnBackground}></div>
                    </div>
                </div>

                <ProductsMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    );
}

export default ProductPage;