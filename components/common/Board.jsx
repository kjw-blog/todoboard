import { useState, useEffect } from 'react';
import Image from 'next/image';

import Post from '../board/Post';
import { list } from 'postcss';

export default function Board() {
  const [render, setRender] = useState(false);
  const [postList, setPostList] = useState([]);

  const insert = (e) => {
    const text = e.target.value;

    if (e.key === 'Enter') {
      if (text) {
        localStorage.clear();

        localStorage.setItem('list', JSON.stringify([...postList, text]));
        e.target.value = '';
        setRender((prev) => !prev);
      } else {
        alert('빈 포스트 입니다.');
      }
    }
  };

  useEffect(() => {
    const list = localStorage.getItem('list');
    if (list) {
      setPostList(JSON.parse(list));
    }
  }, [render]);

  return (
    <>
      <div className="relative w-[25%] min-w-[480px] p-10 pt-20 space-y-2 select-none min-h-[72.5%] max-h-[72.5%] bg-board bg-cover">
        <div className="overflow-y-scroll scrollbar-hide h-full w-full">
          <ul className="grid transition-all grid-cols-1 justify-start space-y-5 items-start">
            {postList.length > 0 &&
              postList.map((post) => <Post key={post} text={post} />)}
          </ul>
        </div>
        <div className="absolute top-0 right-0">
          <Image src="/pin.png" alt="pin" width={64} height={49.6} />
        </div>
      </div>
      <input
        type="text"
        onKeyPress={insert}
        className="outline-none border-l-[25px] min-w-[480px]  border-l-yellow-300 bg-yellow-200 w-[25%] h-12 px-4 text-gray-500 font-bold text-sm transition-all focus:shadow-hover focus:rounded-br-hover shadow-post hover:shadow-hover rounded-br-post hover:rounded-br-hover"
      />
    </>
  );
}
