import Layout from '../Layout';

export default function BlogSkeleton() {
  return (
    <Layout title={'Loading | Rinaru'}>
      <div className='flex flex-col max-w-3xl mx-auto overflow-hidden py-14'>
        <div className='flex w-full mx-auto mb-10 text-left'>
          <div className='flex-1 py-2 space-y-4'>
            <div className='w-full h-80 rounded bg-gray-500 animate-pulse' />
            <div className='p-6 pb-12 m-4 mx-auto -mt-4 md:mt-4 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900'>
              <div className='w-full h-8 rounded bg-gray-500 animate-pulse' />
              <div className='w-32 h-4 rounded bg-gray-500 animate-pulse' />
              <div className='flex flex-row gap-2'>
                <div className='w-28 h-8 rounded bg-gray-500 animate-pulse' />
                <div className='w-28 h-8 rounded bg-gray-500 animate-pulse' />
              </div>
              <div className='py-8 flex flex-col gap-4'>
                <div className='w-full h-4 rounded bg-gray-500 animate-pulse' />
                <div className='w-full h-4 rounded bg-gray-500 animate-pulse' />
                <div className='w-4/5 h-4 rounded bg-gray-500 animate-pulse' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
