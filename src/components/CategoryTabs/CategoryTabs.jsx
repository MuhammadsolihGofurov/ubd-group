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
                        <div className={styles.slide} key={item.id}>
                            <ImageComponent
                                src={item.img}
                                alt=""
                            />

                            <div className={styles.info} color={item.id} style={{ color: item.id === 1 ? "black" : null }}>
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