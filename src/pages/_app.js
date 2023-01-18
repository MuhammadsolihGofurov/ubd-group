import { useRouter } from "next/router";
import { useEffect } from "react";

import Sprites from "../utils/sprites";

import NProgress from "nprogress";

//styles
import '../styles/nprogress.css'
import "../styles/globals.scss";

//layout
import MainLayout from "../layouts/Main";


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <MainLayout>
      <Sprites />
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
