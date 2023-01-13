import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image';

import data from '../../../db.json';

import Menu from '../Menu/Menu'

import styles from './Header.module.scss';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
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
            {/* <div className={styles.links}>
                {
                    data.menu?.map((item) => (
                        <li key={item.id}>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Header;