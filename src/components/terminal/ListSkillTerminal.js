export default function ListSkillTerminal({ title, children }) {
  return (
    <ul className='list-disc py-2'>
      <p className='px-0 font-bold'>{title}</p>
      <div className='px-8'>{children}</div>
    </ul>
  );
}
