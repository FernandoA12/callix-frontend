/* eslint-disable @next/next/next-script-for-ga */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Space X</title>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMP9J5X"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WCZKR9TGN0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WCZKR9TGN0');
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
