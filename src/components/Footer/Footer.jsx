import Link from "next/link";

import { useState } from "react";

import styled from "styled-components";
import styles from './Footer.module.scss';

const Footer = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <hr />
                <div className={styles.pages}>
                    <Link href="/">Главная</Link>
                    <Link href="/">Фотогалерея</Link>
                    <Link href="/">Продукция</Link>
                    <Link href="/">Контакты</Link>
                    <Link href='/'>Оставить заявку</Link>
                </div>

                <div className={styles.socials}>
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                    >
                        <use xlinkHref="#facebook"></use>
                    </svg>
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                    >
                        <use xlinkHref="#instagram"></use>
                    </svg>
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                    >
                        <use xlinkHref="#telegram"></use>
                    </svg>
                </div>
                <Link href="https://inweb.uz/" className={styles.dev}>Разработка- INWEB</Link>
            </div>
        </div>
    )
}

export default Footer;

const Socials = styled.div`
    text-align: end;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;

    @media screen and (min-width: 769px){
        justify-content: flex-start;
    }
`

const Dev = styled.div`
    text-align: end;    
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .02em;
    color: #fb4a7b;
`