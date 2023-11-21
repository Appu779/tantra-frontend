import React from "react";
import MarqueeComp from "../marquee/MarqueeComp";
import CountDown from "../countDown/CountDown";

const Description = () => {
  return (
    <div className="bg-zinc-300 py-10 h-[800px] sm:min-h-screen flex flex-col justify-around">
      <hr className="border-gray-800 pb-10" />
      <div className="flex flex-col justify-center sm:items-center sm:flex-row sm:justify-around px-10 gap-20 sm:gap-0">
        <ul className="flex flex-col gap-2 font-sans text-6xl sm:text-7xl font-bold text-gray-200 drop-shadow-lg shadow-black grow sm:grow-0">
          <li className="drop-shadow-lg shadow-black ">Connect</li>
          <li className="text-gray-800 drop-shadow-2xl animate-pulse">
            Collaborate
          </li>
          <li className="drop-shadow-lg shadow-black">Catalyze.</li>
        </ul>
        <CountDown />
      </div>
      <MarqueeComp mdir="left" />
    </div>
  );
};

export default Description;
