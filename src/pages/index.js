import Head from 'next/head';

import CategoryTabs from '../components/CategoryTabs/CategoryTabs';
import Contacts from '../components/Contacts/Contacts';
import Headline from '../components/Headline/Headline';
import Products from '../components/Products/Products';
import SpanbondDescription from '../components/SpanbondDescription/SpanbondDescription';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UBD-Group</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headline />
      <SpanbondDescription />
      <Products />
      <CategoryTabs />
      <Contacts />
    </div>
  )
}

export default Home;