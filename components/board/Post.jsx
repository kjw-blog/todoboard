export default function Post({ text }) {
  return (
    <li className="border-l-[25px] border-l-yellow-300 flex items-center bg-yellow-200 h-12 px-4 text-gray-500 font-bold text-sm transition-all focus:shadow-hover focus:rounded-br-hover shadow-post hover:shadow-hover rounded-br-post hover:rounded-br-hover">
      {text}
    </li>
  );
}
