import data from '../../../db.json';

import Product from "../product/product.component";

import styled from "styled-components";
import Image from 'next/image';

import styles from './Products.module.scss'
const Products = () => {
    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default Products;