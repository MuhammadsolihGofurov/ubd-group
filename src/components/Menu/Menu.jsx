import Image from 'next/image';
import Link from 'next/link'

import CompanyLogo from '../CompanyLogo/CompanyLogo';

import styles from './Menu.module.scss'

const Menu = ({ isOpen, setIsOpen, data, menu }) => {
    return (
        <div className={`${styles.container} ${isOpen ? styles.active : ''}`}>
            <div className={styles.logo}>
                <div />
                <CompanyLogo />
                <svg
                    viewBox='0 0 24 24'
                    width={32}
                    height={32}
                    fill="none"
                    onClick={() => setIsOpen(false)}
                >
                    <use xlinkHref='#close'></use>
                </svg>
            </div>
            <div className={styles.links}>
                {
                    menu?.map((item) => (
                        <li key={item.id} onClick={() => setIsOpen(false)}>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    ))
                }
                <li>
                    <Link href='/' onClick={() => setIsOpen(false)}>
                        <svg
                            viewBox='0 0 24 24'
                            width={28}
                            height={28}
                            fill="none"
                        >
                            <use xlinkHref='#plus'></use>
                        </svg>
                        <span>Оставить заявку</span>
                    </Link>
                </li>
            </div>
            <div className={styles.contact}>
                <div className={styles.socials}>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <svg
                            viewBox='0 0 24 24'
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <use xlinkHref='#facebook'></use>
                        </svg>
                    </Link>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <svg
                            viewBox='0 0 24 24'
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <use xlinkHref='#instagram'></use>
                        </svg>
                    </Link>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <svg
                            viewBox='0 0 24 24'
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <use xlinkHref='#telegram'></use>
                        </svg>
                    </Link>
                </div>
                <div className={styles.phoneNumber}>+998 90 123 45 67</div>
            </div>
            <div className={styles.background}>
                <Image
                    src={'/images/Group.png'}
                    alt=""
                    sizes="100vw"
                    width={100}
                    height={20}
                    className='background'
                />
            </div>
        </div>
    )
}

export default Menu;
