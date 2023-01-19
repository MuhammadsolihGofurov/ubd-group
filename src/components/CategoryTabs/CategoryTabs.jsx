import data from '../../../db.json';

import ImageComponent from '../ImageComponent/ImageComponent'

import styles from './CategoryTabs.module.scss';
import { useEffect, useRef } from 'react';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CategoryTabs = () => {
    const categoryTabsRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray(".card");
        const spacer = 20;
        const minScale = 0.8;

        const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

        cards.forEach((card, index) => {
            const scaleVal = distributor(index, cards[index], cards);

            const tween = gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: `top top`,
                    scrub: true,
                    markers: false,
                    invalidateOnRefresh: true
                },
                ease: "none",
                scale: scaleVal
            });

            ScrollTrigger.create({
                trigger: card,
                start: `top-=${index * spacer} top`,
                endTrigger: '.cards',
                end: `bottom top+=${150 + (cards.length * spacer)}`,
                pin: true,
                pinSpacing: false,
                markers: false,
                id: 'pin',
                invalidateOnRefresh: true,
            });
        });
    });

    return (
        <div className={styles.container} ref={categoryTabsRef} id="gallary">
            <div className={`cards ${styles.slides}`}>
                {
                    data.sliders.map((item) => (
                        <div className={`
                        ${styles.slide} 
                        ${item.id === 0 ? styles.furniture : ''}
                        ${item.id === 1 ? styles.ad : ''}
                        ${item.id === 2 ? styles.medical : ''}
                        card
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
            <div className={styles.vector}>
                <ImageComponent
                    src={'/images/main-vector-3.png'}
                />
            </div>
        </div>
    )
}

export default CategoryTabs;