import Head from "next/head";
import Header from "../components/header/header.component";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          // content="upgrade-insecure-requests"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
