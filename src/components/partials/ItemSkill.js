import moment from 'moment';

export default function ItemSkill({ skill, date, description }) {
  return (
    <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-yellow-400'>
      <h3 className='text-xl font-semibold tracking-wide font-publicsans'>
        {skill}
      </h3>
      <time className='text-xs tracking-wide uppercase text-gray-400 font-publicsans'>
        {moment(date).format('MMM YYYY')}
      </time>
      <p className='mt-3 font-nunito'>{description}</p>
    </div>
  );
}
