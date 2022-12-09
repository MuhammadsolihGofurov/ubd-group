import CompanyContacts from "../company-contacts/company-contact.component";
import ContactForm from "../contact-form/contact-form.component";

import styled from "styled-components";

const Contacts = () => (
    <ContactsContainer>
        <h3>Наши Контакты <span>Контакты</span></h3>
        <CompanyContacts />
        <ContactForm />
        <Eclipse />
    </ContactsContainer>
)

export default Contacts;

const ContactsContainer = styled.div`
    position: relative;
    overflow: hidden;
    color: #242424;
    margin-top: 120px;

    h3{
        grid-column: 1/2;
        grid-row: 1/2;
        text-align: center;
        position: relative;
        margin-bottom: 70px;
        font-size: 24px;
        font-weight: 600;
        line-height: 29px;
        margin-top: 102px;

        span {
            position: absolute;
            font-size: 64px;
            line-height: 77px;
            color: #F5F5F5;
            z-index: -1;
            top: -.25em;
            left: .8em;
        }
    }

    @media screen and (min-width: 769px){
        display: grid;
        grid-template-rows: 250px;
        grid-template-columns: 1fr 1fr;
        padding: 0 160px;
        padding-top: 269px;
        margin-top: 100px;

        h3{
            margin-top: 0;
            text-align: start;
            font-size: 48px;

            span {
                font-size: 130px;
                top: -.02em;
                left: -.7em;
            }
        }
    }
`

const Eclipse = styled.div`
    position: absolute;
    content: url('/images/Ellipse.svg');
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -2;

    @media screen and (min-width: 768px){
        /* background-image: url('/images/Ellipse.png'); */
        background-image: none;
        content: url('/images/Ellipse 15.svg');
        width: 100%;
        height: 100%;
    }
`