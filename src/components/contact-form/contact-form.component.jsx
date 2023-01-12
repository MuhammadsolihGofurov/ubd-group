import styled from "styled-components";

const ContactForm = () => {
    return (
        <ContactFormContainer>
            <Input type="text" placeholder="Ваше имя" />
            <Input type="text" placeholder="Ваш E-mail" />
            <TextArea name="" id="" cols="30" rows="10" placeholder="Ваше сообщение"></TextArea>
            <Button>
                <button></button>
            </Button>
        </ContactFormContainer>
    )
}

export default ContactForm;

const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 80px;
    grid-row: 2/3;
    grid-column: 1/2;
    position: relative;

    @media screen and (min-width: 768px){
        width: 80%;
    }
`

const Input = styled.input`
    border: 1px solid #E0E0E0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
`

const TextArea = styled.textarea`
    border: 1px solid #E0E0E0;
    padding: 12px 16px;
    height: 240px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
`

const Button = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;

    button{
        width: fit-content;
        background-color: #FB4A7B;
        border: none;
        width: 48px;
        height: 48px;
        border-radius: 800px;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 10px;

        svg {
            position: absolute;
            top: 13px;
            left: 13px;
            scale: 1;
        }

        svg * {
            fill: #FFFFFF;
        }
    }
`