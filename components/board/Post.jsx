export default function Post({
  text,
  list,
  setList,
  deleteLoading,
  setDeleteLoading,
}) {
  const deletePost = (e) => {
    if (deleteLoading) {
      alert('다른 포스트잇을 삭제중입니다 잠시 후 다시 삭제해주세요.');
      return;
    }

    setDeleteLoading(true);
    const style = e.target.style;
    e.target.animate(
      [
        {
          transform: 'translateX(0px)',
        },
        {
          transform: 'translateX(-500px)',
        },
      ],
      {
        duration: 600,
        iterations: 1,
      }
    );
    const newList = list.filter((post) => post !== text);
    localStorage.clear();

    localStorage.setItem('list', JSON.stringify(newList));

    setTimeout(() => {
      style.height = '0px';
      style.margin = '0px';

      setTimeout(() => {
        setList(newList);
        setDeleteLoading(false);
      }, 200);
    }, 400);
  };

  return (
    <>
      <li
        onClick={deletePost}
        className="border-l-[25px] z-50 border-l-yellow-300 flex items-center overflow-hidden duration-500 bg-yellow-200 h-12  px-4 text-gray-500 font-bold text-sm transition-all focus:shadow-hover focus:rounded-br-hover shadow-post hover:shadow-hover rounded-br-post hover:rounded-br-hover"
      >
        {text.slice(0, text.lastIndexOf('_'))}
      </li>
    </>
  );
}
