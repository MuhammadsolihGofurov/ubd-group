import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styles from './Main.module.scss'

const MainLayout = ({ children }) => (
    <div className={styles.container}>
        <header>
            <Header />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default MainLayout;