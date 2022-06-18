export default function Badge({ title }) {
  return (
    <strong
      className={`text-gray-800 bg-yellow-200 border border-current uppercase px-3 py-1.5 rounded`}
    >
      {title}
    </strong>
  );
}
