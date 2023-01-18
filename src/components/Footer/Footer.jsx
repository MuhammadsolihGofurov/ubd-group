import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";

import styles from './Footer.module.scss';

const Footer = ({ show }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { route } = useRouter();

    return (
        <div className={`
            ${styles.container}
            ${route === '/products/[product]' ? styles.hide : ''}
            ${show ? styles.show : ''}
        `}
            id="footer"
        >
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
                    <div>
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
        </div>
    )
}

export default Footer;