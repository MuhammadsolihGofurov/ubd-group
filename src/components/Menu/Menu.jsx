import Image from 'next/image';
import Link from 'next/link'

import styled from "styled-components"
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
                        <li key={item.id}>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    ))
                }
                <li>
                    <Link href='/'>
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
                    <Link href="/">
                        <svg
                            viewBox='0 0 24 24'
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <use xlinkHref='#facebook'></use>
                        </svg>
                    </Link>
                    <Link href="/">
                        <svg
                            viewBox='0 0 24 24'
                            width={40}
                            height={40}
                            fill="none"
                        >
                            <use xlinkHref='#instagram'></use>
                        </svg>
                    </Link>
                    <Link href="/">
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
            <Background>
                <Image
                    src={'/images/Group.png'}
                    alt=""
                    sizes="100vw"
                    width={100}
                    height={20}
                    className='background'
                />
            </Background>
        </div>
    )
}

export default Menu;

const Categories = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
    align-items: center;
    font-weight: 600;

    li:nth-of-type(5){
        font-weight: 600;
        cursor: pointer;
        color: #FB4A7B;
        padding: 0 24px;
        border: 1px solid #FB4A7B;
        border-radius: 500px;
        
        a{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 17px;

            span {
                font-weight: 300;
                font-size: 3em;
            }
        }
    }
`

const Background = styled.div`
    img {
        position: absolute;
        z-index: -1;
        bottom: 0%;
        right: 0;
    }
`
