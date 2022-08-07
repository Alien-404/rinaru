export default function Blog({ children, headingTitle }) {
  return (
    <section className='py-8 px-0 md:px-28 '>
      <div className='container p-6 mx-auto space-y-8 '>
        <div className='space-y-2 text-center'>
          <h2 className='text-3xl font-bold font-publicsans'>{headingTitle}</h2>
        </div>
        <div className='grid grid-cols-1 gap-x-2 md:gap-x-12 gap-y-8'>
          {children}
        </div>
      </div>
    </section>
  );
}
