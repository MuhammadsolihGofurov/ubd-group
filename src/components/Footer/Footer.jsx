import { useRouter } from "next/router";

import { useState } from "react";
import { Link } from "react-scroll";

import styles from './Footer.module.scss';

const Footer = ({ show }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { route } = useRouter();
    const router = useRouter();
    const handleClick = (url) => {
        router.push(url)
    }

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
                    <Link
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                    >
                        Главная
                    </Link>
                    <Link
                        to="gallary"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Фотогаллерея
                    </Link>
                    <Link
                        onClick={() => handleClick('products/[products]')}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                    >
                        Продукция
                    </Link>
                    <Link
                        onClick={() => handleClick('/aboutus')}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                    >
                        О нас
                    </Link>
                    <Link
                        to='contacts'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={200}
                    >
                        Оставить заявку
                    </Link>
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