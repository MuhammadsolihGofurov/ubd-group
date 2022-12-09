import Image from 'next/image';
import Link from 'next/link'

import data from '../../data.json';

import Logo from '../../icons/ubd-logo.svg'
import CloseLogo from '../../icons/ph_x.svg';
import Group from '../../images/Group.png';

import styled from "styled-components"

const Menu = ({ setIsOpen }) => {
    const { phone, links } = data.contacts[0];
    return (
        <MenuContainer>
            <Header>
                <div></div>
                <Logo />
                <CloseLogo onClick={() => { setIsOpen(false) }} />
            </Header>
            <Categories>
                <li><Link href='/'>Главная</Link></li>
                <li><Link href='/'>Продукция</Link></li>
                <li><Link href='/'>Фотогалерея</Link></li>
                <li><Link href='/'>Контакты</Link></li>
                <li><Link href="/"><span>+</span> Оставить заявку</Link></li>
            </Categories>
            <Contact>
                <Socials>
                    {
                        links.map((link) => (
                            <div key={link.id}>
                                <Image src={link.logo} alt="Logo" width={40} height={40} />
                            </div>
                        ))
                    }
                </Socials>
                <div>{phone}</div>
            </Contact>
            <Background>
                <Image src={Group} alt="" className='background' />
            </Background>
        </MenuContainer>
    )
}

export default Menu;

const MenuContainer = styled.menu`
    font-family: 'Inter';
    padding:  24px 34px;
    top: 0;
    left: 0;
    z-index: 1;
    position: fixed;
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

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

const Socials = styled.div`
    display: flex;
    gap: 12px;
    z-index: 1;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    color: #FB4A7B;
    font-weight: 600;
    line-height: 25px;
    position: relative;
`

const Background = styled.div`
    img {
        position: absolute;
        z-index: -1;
        bottom: 0%;
        right: 0;
    }
`
