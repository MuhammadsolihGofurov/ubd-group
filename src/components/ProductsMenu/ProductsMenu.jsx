import { useEffect, useRef } from 'react';
import styles from './ProductsMenu.module.scss'

const ProductsMenu = ({ isOpen, setIsOpen }) => {
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (isOpen !== true) {
                        setIsOpen(false);
                    }
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div
            className={`${styles.container} ${isOpen ? styles.open : ''}`}
            onTouchMove={(e) => e.preventDefault()}
            ref={wrapperRef}
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