import Image from "next/image";

import data from '../../../db.json';

import styled from "styled-components";
import ImageComponent from '../ImageComponent/ImageComponent'

import styles from './CategoryTabs.module.scss';

const CategoryTabs = () => {
    return (
        <div className={styles.container}>
            <div>
            </div>
            <div className={styles.slides}>
                {
                    data.sliders.map((item) => (
                        <div className={`
                            ${styles.slide} 
                            ${item.id === 0 ? styles.furniture : ''}
                            ${item.id === 1 ? styles.ad : ''}
                            ${item.id === 2 ? styles.medical : ''}
                        `}
                            key={item.id}
                        >
                            <div className={styles.gradient}></div>
                            <ImageComponent
                                src={item.img}
                                alt=""
                            />

                            <div className={styles.info} color={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryTabs;