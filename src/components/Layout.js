import Head from 'next/head';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} key='title' />
      </Head>
      <Navbar />
      <div className='bg-gray-700 text-slate-200'>{children}</div>
      <Footer />
    </>
  );
}
