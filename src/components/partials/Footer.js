import Link from 'next/link';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineLinkedin,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='text-center bg-gray-900 text-slate-200'>
      <div className='max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto space-y-6'>
          <div className='flex justify-center space-x-6'>
            <a
              className='text-slate-200 hover:text-opacity-75'
              href='https://github.com/Alien-404'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineGithub className='w-8 h-8' />
            </a>
            <a
              className='text-slate-200 hover:text-opacity-75'
              href='https://www.instagram.com/stfu_404/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineInstagram className='w-8 h-8' />
            </a>
            <a
              className='text-slate-200 hover:text-opacity-75'
              href='https://www.linkedin.com/in/rico-w-6aa984179/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineLinkedin className='w-8 h-8' />
            </a>
          </div>
          <nav className='relative flex flex-wrap justify-center gap-8 p-4 text-sm font-bold border-2 border-slate-200 rounded-md font-nunito'>
            <Link
              href={'/portfolio'}
              target={'_blank'}
              rel='noopener noreferrer'
            >
              <a className='hover:opacity-75'>Portfolio</a>
            </Link>
            <Link href={'/blog'} target={'_blank'} rel='noopener noreferrer'>
              <a className='hover:opacity-75'>Blog</a>
            </Link>
            <Link href={'/about'} target={'_blank'} rel='noopener noreferrer'>
              <a className='hover:opacity-75'>About</a>
            </Link>
          </nav>
          <p className='text-xs font-medium font-publicsans'>
            Copyright © {new Date().getFullYear()} - All right reserved Rico
          </p>
        </div>
      </div>
    </footer>
  );
}
