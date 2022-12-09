import styled from "styled-components";

const ContactForm = () => (
    <ContactFormContainer>
        <Input type="text" placeholder="Ваше имя" />
        <Input type="text" placeholder="Ваш E-mail" />
        <TextArea name="" id="" cols="30" rows="10" placeholder="Ваше сообщение"></TextArea>
    </ContactFormContainer>
)

export default ContactForm;

const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 80px;
    grid-row: 2/3;
    grid-column: 1/2;

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