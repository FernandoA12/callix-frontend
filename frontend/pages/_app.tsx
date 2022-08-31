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

  return <>
  <Head>
    <title>Space X</title>
  </Head>
  <Component {...pageProps} />
  </>;
}

export default MyApp;
