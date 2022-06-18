import Link from 'next/link';

export default function Card({ children, headingTitle, btnLink }) {
  return (
    <section className='py-8 px-0 md:px-28'>
      <div className='container p-6 mx-auto space-y-8'>
        <div className='space-y-2 text-center'>
          <h2 className='text-3xl font-bold'>{headingTitle}</h2>
        </div>
        <div className='grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          {children}
        </div>
      </div>
      <div className='space-y-2 text-center my-14'>
        {btnLink && (
          <Link href={btnLink}>
            <a className='inline-block px-12 py-3 text-sm font-medium  border border-yellow-200 rounded hover:bg-yellow-200 hover:text-gray-800 active:bg-yellow-100 focus:outline-none focus:ring'>
              See more
            </a>
          </Link>
        )}
      </div>
    </section>
  );
}
