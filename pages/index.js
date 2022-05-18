import Timer from '../components/common/Timer';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full">
      <Timer />
      <div className="w-[25%] h-20 border-2 border-red-500">Board</div>
    </div>
  );
}
