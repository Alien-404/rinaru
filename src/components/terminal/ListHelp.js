export default function ListHelp({ command, description }) {
  return (
    <p>
      <span className='font-bold'>{command}</span> - {description}
    </p>
  );
}
