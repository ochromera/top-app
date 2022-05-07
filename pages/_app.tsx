import '../styles/globals.css';
import {AppProps} from "next/app";
import Head from "next/head";
import React from "react"


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet"/>
      </head>
        <Component {...pageProps}/>
</>;
}



export default MyApp
