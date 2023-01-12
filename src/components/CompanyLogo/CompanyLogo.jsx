import ImageComponent from "../ImageComponent/ImageComponent";
import styles from './CompanyLogo.module.scss'
const CompanyLogo = () => {
    return (
        <div className={styles.container}>
            <ImageComponent
                src="/images/company logo.png"
            />
            <div>
                <p>UBD GROUP</p>
                <p>Спонбонд в Узбекистане</p>
            </div>
        </div>
    );
}

export default CompanyLogo;