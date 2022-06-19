import Layout from '../Layout';

export default function PortSkeleton() {
  return (
    <Layout title={'Loading | Rinaru'}>
      <div className='px-6 py-24 mx-auto space-y-16'>
        <div className='flex w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2'>
          <div className='flex-1 py-2 space-y-4 animate-pulse'>
            <div className='w-full h-80 rounded bg-gray-500' />
            <div className='w-full h-8 rounded bg-gray-500' />
            <div className='flex flex-row gap-2'>
              <div className='w-28 h-8 rounded bg-gray-500' />
              <div className='w-20 h-8 rounded bg-gray-500' />
            </div>
            <div className='flex flex-row gap-2'>
              <div className='w-28 h-4 rounded bg-gray-500' />
              <div className='w-28 h-4 rounded bg-gray-500' />
            </div>
            <div className='py-8 flex flex-col gap-4'>
              <div className='w-full h-4 rounded bg-gray-500' />
              <div className='w-full h-4 rounded bg-gray-500' />
              <div className='w-4/5 h-4 rounded bg-gray-500' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
