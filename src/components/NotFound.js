import Link from 'next/link';
import { HiOutlineEmojiSad } from 'react-icons/hi';

export default function NotFound() {
  return (
    <section className='flex items-center h-full p-16 text-gray-100'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <HiOutlineEmojiSad className='h-48 w-48 mb-8 mx-auto' />
          <p className='text-2xl font-semibold md:text-3xl'>
            Sorry, we couldnt find this page.
          </p>
          <p className='mt-4 mb-8 text-gray-400'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href={'/'} rel={'noopener noreferrer'}>
            <a className='inline-block px-12 py-3 font-semibold rounded bg-yellow-200 text-slate-700 hover:bg-yellow-400'>
              Homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
