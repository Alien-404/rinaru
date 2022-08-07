import SectionItem from './partials/SectionItem';

export default function Section({ sections }) {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='flex flex-col mb-16 sm:text-center'>
          <div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-200 sm:text-4xl md:mx-auto font-publicsans'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='ec5d8ef5-b853-4714-b94f-df28ec98eeb7'
                      x={0}
                      y={0}
                      width='.135'
                      height='.30'
                    >
                      <circle cx={1} cy={1} r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)'
                    width={52}
                    height={24}
                  />
                </svg>
                <span className='relative'>The</span>
              </span>{' '}
              short story checkpoints
            </h2>
            <p className='text-base text-slate-400 md:text-lg font-nunito'>
              short story about me in some checkpoints like when I started, what
              I learned, what I mastered and so on until today.
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          {sections &&
            sections.map((itemSection) => {
              const { id, title, description } = itemSection;
              return (
                <SectionItem key={id} title={title}>
                  {description}
                </SectionItem>
              );
            })}
        </div>
      </div>
    </div>
  );
}
