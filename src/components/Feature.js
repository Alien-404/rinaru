import Image from 'next/image';

export default function Feature() {
  return (
    <section className='p-4 lg:p-8 text-gray-100'>
      <div className='container mx-auto space-y-12'>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
          <div className='h-full lg:h-80 bg-slate-800 aspect-video relative'>
            <Image
              src='/image/terminal.png'
              alt='featureImage'
              layout='fill'
              objectFit='contain'
              priority
              quality={95}
            />
          </div>
          <div className='flex flex-col justify-center flex-1 p-6 bg-slate-800'>
            <span className='text-xs uppercase text-gray-400 font-publicsans'>
              Main Feature
            </span>
            <h3 className='text-xl lg:text-3xl font-bold font-publicsans'>
              Built-in interactive terminal
            </h3>
            <p className='my-6 text-gray-400 font-nunito'>
              Interactive terminal to present information about me into the CLI
              with a new feel in today&apos;s websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
