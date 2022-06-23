import { ReactTerminal } from 'react-terminal';
import Styles from '../../styles/Terminal.module.css';
import { commands } from '../lib/commands';

export default function TerminalUI() {
  return (
    <div className={`mx-auto w-3/4 my-8 mb-16`}>
      <h3 className='text-center font-medium text-3xl py-8 text-slate-200'>
        Interactive Terminal Rinaru
      </h3>
      <div className='w-full mx-auto text-justify block lg:hidden'>
        <div className='flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-32 w-32'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        <p className='tracking-tight text-md'>
          This feature is only available on a desktop or laptop, sorry. return
          to using the device to use this feature.
        </p>
      </div>
      <div className={`hidden lg:block ${Styles.scrollBar}`}>
        <ReactTerminal
          commands={commands}
          theme={'dark'}
          prompt={'R:\\Rinaru>'}
          welcomeMessage={
            <p>Type &quot;help&quot; for all available commands.</p>
          }
          errorMessage={(command) => {
            return `Rinaru : ${command} command not found`;
          }}
        />
      </div>
    </div>
  );
}
