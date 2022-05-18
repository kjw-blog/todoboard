import Board from '../components/common/Board';
import Timer from '../components/common/Timer';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-5 h-full">
      <Timer />
      <Board />
    </div>
  );
}
