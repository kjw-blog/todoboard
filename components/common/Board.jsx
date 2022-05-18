export default function Board() {
  return (
    <>
      <div className="w-[25%] flex-col flex justify-center items-center space-y-2 select-none min-h-[72.5%] max-h-[72.5%] bg-board bg-cover"></div>
      <input
        type="text"
        className="outline-none bg-yellow-300 w-[25%] h-12 px-4 text-gray-700 text-sm"
      />
    </>
  );
}
