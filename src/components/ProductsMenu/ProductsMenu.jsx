import styles from './ProductsMenu.module.scss'

const ProductsMenu = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`${styles.container} ${isOpen ? styles.open : ''}`}
            onTouchMove={(e) => e.preventDefault()}
        >
            <div
                className={styles.indicator}
                onClick={() => setIsOpen(!isOpen)}
            >
                <hr />
            </div>
            <div className={styles.tabs}>
                <p className={styles.active} onClick={() => setIsOpen(!isOpen)}>Простыни на кушетку</p>
                <p onClick={() => setIsOpen(!isOpen)}>Мыдицинские халаты</p>
                <p onClick={() => setIsOpen(!isOpen)}>Медицинские маски</p>
                <p onClick={() => setIsOpen(!isOpen)}>Бахилы</p>
                <p onClick={() => setIsOpen(!isOpen)}>Шапочки</p>
            </div>
        </div>
    );
}

export default ProductsMenu;