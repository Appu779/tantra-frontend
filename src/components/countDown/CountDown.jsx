import React, { useState, useEffect } from "react";

const CountDown = () => {
  const calculateTimeRemaining = () => {
    const endDate = new Date("2023-12-04T12:00:00+08:30");
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor(difference / 1000);
    return {
      days: Math.floor(seconds / (3600 * 24)),
      hours: Math.floor((seconds % (3600 * 24)) / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: seconds % 60,
    };
  };

  const [time, setTime] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => calculateTimeRemaining(prevTime));
    }, 0);

    return () => clearInterval(timer);
  }, [time.seconds]);

  return (
    <div className="text-center mt-8 text-black drop-shadow-2xl  sm:w-fit mx-auto sm:mx-0">
      {time ? (
        <p className="text-xl sm:text-3xl font-bold font-mono mb-4 bg-gray-900 rounded p-6 text-gray-400 flex gap-3 sm:gap-5">
          <span className="bg-white p-1 px-2 rounded-sm text-gray-900 w-13">
            {time.days < 10 ? `0${time.days}` : time.days}
          </span>
          :
          <span className="bg-white p-1 px-2 rounded-sm text-gray-900 w-13">
            {time.hours < 10 ? `0${time.hours}` : time.hours}
          </span>
          :
          <span className="bg-white p-1 px-2 rounded-sm text-gray-900 w-13">
            {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
          </span>
          :
          <span className="bg-white p-1 px-2 rounded-sm text-gray-900 w-13">
            {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
          </span>
        </p>
      ) : (
        <p className="text-2xl font-bold mb-4">Countdown has ended!</p>
      )}
      <div className="text-4xl sm:text-5xl font-bold font-mono text-gray-700 drop-shadow-lg shadow-black">
        <span>DECEMBER 04</span>
      </div>
    </div>
  );
};

export default CountDown;
