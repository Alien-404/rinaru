import '../styles/globals.css';
import Script from 'next/script';
import { TerminalContextProvider } from 'react-terminal';
import { DefaultSeo } from 'next-seo';
import SEO from '../src/config/next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <TerminalContextProvider>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-1523CL8JLE`}
        strategy='lazyOnload'
      />
      <Script strategy='lazyOnload' id='google-analytics'>
        {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1523CL8JLE');`}
      </Script>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </TerminalContextProvider>
  );
}

export default MyApp;
