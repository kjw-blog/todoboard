import { useState, useEffect } from 'react';
import Image from 'next/image';

import Post from '../board/Post';

export default function Board() {
  const [render, setRender] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [postList, setPostList] = useState([]);

  const insert = (e) => {
    const text = e.target.value;

    if (e.key === 'Enter') {
      if (text) {
        localStorage.clear();

        localStorage.setItem(
          'list',
          JSON.stringify([...postList, text + '_' + +new Date()])
        );
        e.target.value = '';
        setRender((prev) => !prev);
      } else {
        alert('빈 포스트 입니다.');
      }
    }
  };
  const allDelete = () => {
    if (confirm('전체 포스트를 삭제할까요?')) {
      localStorage.clear();
      setRender((prev) => !prev);
    }
  };

  useEffect(() => {
    const list = localStorage.getItem('list');
    if (list) {
      setPostList(JSON.parse(list));
    } else {
      setPostList([]);
    }
  }, [render]);

  return (
    <>
      <div className="relative w-[25%] min-w-[480px] p-10 pt-20 space-y-2 select-none min-h-[72.5%] max-h-[72.5%] bg-board bg-cover">
        <div className="overflow-y-scroll scrollbar-hide h-full w-full">
          <ul className="grid transition-all grid-cols-1 justify-start space-y-5 items-start">
            {postList.length > 0 &&
              postList.map((post) => (
                <Post
                  key={post}
                  text={post}
                  list={postList}
                  setList={setPostList}
                  deleteLoading={deleteLoading}
                  setDeleteLoading={setDeleteLoading}
                />
              ))}
          </ul>
        </div>
        <div className="absolute top-5 right-10">
          <Image src="/pin.png" alt="pin" width={64} height={49.6} />
        </div>
        <div className="absolute top-7 left-10" onClick={allDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-800 cursor-pointer"
            fill="#EAEAEA"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
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
