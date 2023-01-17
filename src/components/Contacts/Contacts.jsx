import styles from './Contacts.module.scss'

const Contacts = () => (
    <div className={styles.container}>
        <div className={styles.content}>
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
            <form>
                <div className={styles.inputs}>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Ваш E-mail" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Ваше сообщение"></textarea>
                <div className={styles.button}>
                    <button>
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                        >
                            <use xlinkHref="#arrow-outward"></use>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
)

export default Contacts;