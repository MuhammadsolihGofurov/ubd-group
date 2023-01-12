import CompanyContacts from "../company-contacts/company-contact.component";
import ContactForm from "../contact-form/contact-form.component";

import styled from "styled-components";
import styles from './Contects.module.scss'

const Contacts = () => (
    <div className={styles.container}>
        <h3>Наши Контакты <span>Контакты</span></h3>
        <div className={styles.contacts}>
            <div>
                <h4>Телефон:</h4>
                <p>+998 97 703-70-80</p>
            </div>
            <div>
                <h4>Почта:</h4>
                <p>info@ubdgroup.uz</p>

            </div>
            <div>
                <h4>Адрес:</h4>
                <p>г.Ташкент, ул.Мустакиллик 59</p>
                <p>Показать на карте</p>
            </div>
        </div>
        <ContactForm />
        <div className={styles.eclipse} />
    </div>
)

export default Contacts;