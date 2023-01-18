import { useState } from 'react'

import { Link } from 'react-scroll';
import Image from 'next/image';

import data from '../../../db.json';

import Menu from '../Menu/Menu'

import styles from './Header.module.scss';
import { useRouter } from 'next/router';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { route } = useRouter();

    const router = useRouter();

    const handleClick = (url) => {
        router.push(url)
    };

    return (
        <div className={`
            ${styles.container}
            ${route === '/aboutus' ? styles.aboutus : ''}
            ${route === '/products/[product]' ? styles.product : ''}
        `}>
            <div className={styles.content}>
                <div onClick={() => handleClick('/')} className={styles.logo}>
                    <Image
                        src={'/images/company logo.png'}
                        alt='Company logo'
                        sizes='100vw'
                        width='0'
                        height='0'
                    />
                    <div>
                        <p>UBD GROUP</p>
                        <p>Спонбонд в Узбекистане</p>
                    </div>
                </div>
                <Menu setIsOpen={setIsOpen} data={data} menu={data.menu} isOpen={isOpen} />
                <div
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        viewBox='0 0 24 24'
                        height={32}
                        width={32}
                        stroke='none'
                    >
                        <use xlinkHref='#menu'></use>
                    </svg>
                </div>
                <div className={styles.links}>
                    {
                        data.menu?.map((item, index) => (
                            <li key={item.id}>
                                <Link
                                    to={item.url}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500 * index}
                                    onClick={() => {
                                        if (item.url === '/' || item.url === '/aboutus') {
                                            handleClick(item.url)
                                        }
                                    }}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                    <Link href='/' className={styles.request}>
                        <svg
                            viewBox='0 0 24 24'
                            width={28}
                            height={28}
                            fill="none"
                        >
                            <use xlinkHref='#plus'></use>
                        </svg>
                        Оставить заявку
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;