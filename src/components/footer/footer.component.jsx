import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

const Footer = ({ data }) => {
    const { links } = data.contacts[0];
    console.log(links)

    return (
        <Main>
            <FooterContainer >
                <hr />
                <Pages>
                    <Link href='/'>Главная</Link>
                    <Link href='/'>Фотогалерея</Link>
                    <Link href='/'>Продукция</Link>
                    <Link href='/'>Контакты</Link>
                    <Link href='/'>Оставить заявку</Link>
                </Pages>

                <Socials>
                    {
                        links.map((link) => (
                            <Link key={link.id} href={link.link}>
                                <Image src={link.logo} alt="" width={24} height={24} />
                            </Link>
                        ))
                    }
                </Socials>
                <Dev>Разработка- INWEB</Dev>
            </FooterContainer>
        </Main>
    )
}

export default Footer;

const Main = styled.footer`
    background-color: transparent;

    @media screen and (min-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
`

const FooterContainer = styled.div`
    padding: 0 34px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-bottom: 86px;

    hr {
        margin-bottom: 8px;
        color: #F2F2F2;
        opacity: .2;
    }  

    @media screen and (min-width: 768px){
        align-items: space-between;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: fit-content;

        hr{
            grid-column: -1/1;
        }
    }
`

const Pages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;

    a{
        line-height: 16.44px;
        font-weight: 500;
        padding-left: 1em;
        text-indent: -.7em;

        &::before{
            content: "• ";
            color: #BDBDBD;
        }

        color: #242424;
        margin-bottom: 12px;

        &:nth-of-type(1){
            display: flex;
        }
    }

    @media screen and (min-width: 768px){
        grid-column: -1/1;
    }
`

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