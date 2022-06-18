import Layout from '../src/components/Layout';
import Link from 'next/link';
import { HiOutlineEmojiSad } from 'react-icons/hi';

export default function Custom404() {
  return (
    <Layout title={'404 Pages | Rinaru'}>
      <section className='flex items-center h-full p-16 text-gray-100'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <HiOutlineEmojiSad className='h-48 w-48 mb-8 mx-auto' />
            <p className='text-2xl font-semibold md:text-3xl'>
              Sorry, we couldnt find this page.
            </p>
            <p className='mt-4 mb-8 text-gray-400'>
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link href={'/'} rel={'noopener noreferrer'}>
              <a className='px-8 py-3 font-semibold rounded bg-yellow-400 text-gray-800'>
                Homepage
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
