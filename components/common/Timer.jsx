import moment from 'moment';
import { useState } from 'react';

export default function Timer() {
  const [date, setDate] = useState(moment().format('YYYY/MM/DD'));
  const [time, setTime] = useState(moment().format('HH:mm:ss'));

  setInterval(() => {
    setTime(moment().format('HH:mm:ss'));
  }, 1000);

  return (
    <div className="w-[25%] flex-col flex justify-center items-center space-y-2 select-none">
      <p className="text-shadow-xl font-bold text-5xl text-white">{date}</p>
      <p className="text-shadow-xl font-bold text-3xl text-white">{time}</p>
    </div>
  );
}
