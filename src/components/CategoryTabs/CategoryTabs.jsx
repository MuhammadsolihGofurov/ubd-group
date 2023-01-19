import { useEffect, useRef, useState } from 'react';

import data from '../../../db.json';

import ImageComponent from '../ImageComponent/ImageComponent'

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styles from './CategoryTabs.module.scss';

const CategoryTabs = () => {
    const [isMobile, setIsMobile] = useState(false)
    const categoryTabsRef = useRef(null);

    const handleResize = () => {
        if (window.innerWidth < 1025) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!isMobile) {
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
                    end: `bottom top+=${250 + (cards.length * spacer)}`,
                    pin: true,
                    pinSpacing: false,
                    markers: false,
                    id: 'pin',
                    invalidateOnRefresh: true,
                });
            });
        }

        window.addEventListener("resize", handleResize)
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