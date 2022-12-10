import { useEffect, useState } from 'react'
import Link from 'next/link'

import Menu from '../menu/menu.component'

import { getData } from '../../utils/getData'

import Logo from '../../icons/ubd-logo.svg'
import MenuLogo from '../../icons/tabler_menu-2.svg'
import PlusLogo from '../../icons/plus.svg'

import styled from 'styled-components'


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData('contacts').then((data) => setData(data));
    }, [])

    return (
        <HeaderContainer>
            <Logo />
            <MenuButton>
                <MenuLogo onClick={() => { setIsOpen(true) }} />
            </MenuButton>
            {
                isOpen ? <Menu setIsOpen={setIsOpen} data={data} /> : null
            }
            <Categories>
                <li><Link href='/'>Главная</Link></li>
                <li><Link href='/'>Продукция</Link></li>
                <li><Link href='/'>Фотогалерея</Link></li>
                <li><Link href='/'>Контакты</Link></li>
                <li><Link href="/"><PlusLogo>+</PlusLogo> Оставить заявку</Link></li>
            </Categories>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header`
    padding:  24px 34px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* @media screen and (min-width: 769px) {
        background-color: black;        
    } */
`

const MenuButton = styled.div`
    @media screen and (min-width: 850px){
        display: none;
    }
`

const Categories = styled.nav`
    display: none;
    color: #242424;

    @media screen and (min-width: 850px){
        *{
            font-family: 'Inter', sans-serif;
        }
        min-width: 570px;
        width: 70%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        font-weight: 600;
        font-family: Inter;

        li:nth-of-type(5){
            font-weight: 600;
            cursor: pointer;
            padding: 8px 24px;
            border: 1px solid #242424;
            border-radius: 500px;
        
            a{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 17px;
            }
        }
    }

    @media screen and (min-width: 1080px){
        width: 60%;
    }
`