import Image from 'next/image';
import Post from '../board/Post';

export default function Board() {
  return (
    <>
      <div className="relative w-[25%] p-10 space-y-2 select-none min-h-[72.5%] max-h-[72.5%] bg-board bg-cover">
        <div className="overflow-scroll scrollbar-hide h-full w-full">
          <ul className="grid grid-cols-1 justify-start space-y-5 items-start">
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
            <Post text="포스트 테스트" />
          </ul>
        </div>
        <div className="absolute top-0 right-0">
          <Image src="/pin.png" alt="pin" width={64} height={49.6} />
        </div>
      </div>
      <input
        type="text"
        className="outline-none border-l-[25px] border-l-yellow-300 bg-yellow-200 w-[25%] h-12 px-4 text-gray-700 text-sm transition-all focus:shadow-hover focus:rounded-br-hover shadow-post hover:shadow-hover rounded-br-post hover:rounded-br-hover"
      />
    </>
  );
}
