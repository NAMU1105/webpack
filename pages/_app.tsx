import App from "next/app";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
//export default appWithTranslation(MyApp);
