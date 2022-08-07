import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className='bg-gray-900 font-nunito'>
      <div className='max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-1 md:flex md:items-center md:gap-12'>
            <Link href={'/'}>
              <a className='block text-yellow-200'>
                <span className='sr-only'>Home</span>
                <h2 className='text-2xl font-bold'>Rinaru</h2>
              </a>
            </Link>
          </div>
          <div className='md:flex md:items-center md:gap-12'>
            <nav
              className='hidden md:block'
              aria-labelledby='header-navigation'
            >
              <h2 className='sr-only' id='header-navigation'>
                Header navigation
              </h2>
              <ul className='flex items-center gap-6 text-sm font-semibold'>
                <li>
                  <Link href={'/portfolio'}>
                    <a className='text-white transition hover:text-white/75 uppercase hover:underline'>
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={'/blog'}>
                    <a className='text-white transition hover:text-white/75 uppercase hover:underline'>
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={'/about'}>
                    <a className='text-white transition hover:text-white/75 uppercase hover:underline'>
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='flex items-center gap-4'>
              <div className='block md:hidden'>
                <button
                  className='p-2 text-white transition bg-gray-800 rounded hover:text-white/75'
                  onClick={() => setIsShow(!isShow)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    {isShow ? (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    ) : (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isShow ? 'block' : 'hidden'
        } text-center rounded-sm shadow-xl border-t-2 md:hidden`}
      >
        <div className='px-6 py-2'>
          <div className='mt-4 space-y-2 text-slate-100'>
            <Link href={'/portfolio'}>
              <a className='block px-8 py-3 text-sm font-medium border border-gray-200 rounded-sm'>
                Portfolio
              </a>
            </Link>
            <Link href={'/blog'}>
              <a className='block px-8 py-3 text-sm font-medium border border-gray-200 rounded-sm'>
                Blog
              </a>
            </Link>
            <Link href={'/about'}>
              <a className='block px-8 py-3 text-sm font-medium border border-gray-200 rounded-sm'>
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
