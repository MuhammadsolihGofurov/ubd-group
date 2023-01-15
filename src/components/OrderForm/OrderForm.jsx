import ImageComponent from '../ImageComponent/ImageComponent';
import styles from './OrderForm.module.scss';

const OrderForm = () => {
    return (
        <div className={styles.container}>
            <h1>Готовы сделать заказ?</h1>

            <form action="">
                <input type="text" placeholder='Ваше имя' />
                <input type="text" placeholder='Ваш E-mail' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Ваше сообщение' />
                <button>Оставить заявку</button>
            </form>

            <div className={styles.vector1}>
                <ImageComponent
                    src={'/images/order-vector-1.png'}
                />
            </div>
        </div>
    );
}

export default OrderForm;