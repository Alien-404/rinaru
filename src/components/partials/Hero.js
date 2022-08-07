import Image from 'next/image';

export default function Hero() {
  return (
    <section className='font-nunito'>
      <div className='container px-6 py-8 mx-auto'>
        <div className='items-center lg:flex'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl font-extrabold text-gray-100'>Who I am</h2>
            <p className='mt-4 text-gray-300 lg:max-w-md'>
              Hi I am rico ,{' '}
              <span className='font-bold text-yellow-200'>
                backend web developer
              </span>
              . I created this website as my documentation on my journey as a
              backend web developer. Check out some of my projects or blogs for
              more info on them.
            </p>
          </div>
          <div className='mt-8 lg:mt-0 lg:w-1/2'>
            <div className='flex items-center justify-center lg:justify-end'>
              <div className='max-w-lg'>
                <Image
                  className='object-cover object-center w-full h-64 rounded-md shadow'
                  src={'/image/profile.jpg'}
                  height={256}
                  width={350}
                  alt={'profile'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
