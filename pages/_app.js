import '../styles/globals.css';
import Script from 'next/script';
import { TerminalContextProvider } from 'react-terminal';

function MyApp({ Component, pageProps }) {
  return (
    <TerminalContextProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`}
        strategy='lazyOnload'
      />
      <Script strategy='lazyOnload' id='google-analytics'>
        {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.GTAG_ID});`}
      </Script>
      <Component {...pageProps} />
    </TerminalContextProvider>
  );
}

export default MyApp;
