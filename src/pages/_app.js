import Sprites from "../utils/sprites";

//styles
import "../styles/globals.scss";
import MainLayout from "../layouts/Main";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Sprites />
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
