import { useState } from 'react';

export default function SectionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border rounded shadow-sm font-nunito'>
      <button
        type='button'
        aria-label='Open item'
        title='Open item'
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-lg font-medium text-slate-200'>{title}</p>
        <div className='flex items-center justify-center w-8 h-8 border rounded-full'>
          <svg
            viewBox='0 0 24 24'
            className={`w-3 text-gray-200 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              points='2,7 12,17 22,7'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className='p-4 pt-0'>
          <p className='text-slate-300'>{children}</p>
        </div>
      )}
    </div>
  );
}
