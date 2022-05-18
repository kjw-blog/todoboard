import moment from 'moment';
import { useState, useEffect } from 'react';

export default function Timer() {
  const [date] = useState(moment().format('YYYY/MM/DD'));
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
    }, 1000);
  }, []);

  return (
    <div className="w-[25%] flex-col flex justify-center items-center space-y-2 h-20 select-none">
      {time ? (
        <>
          <p className="text-shadow-xl font-bold text-5xl text-white">{date}</p>
          <p className="text-shadow-xl font-bold text-3xl text-white">{time}</p>
        </>
      ) : (
        <p className="text-shadow-xl font-bold text-5xl text-white">
          Loading...
        </p>
      )}
    </div>
  );
}
