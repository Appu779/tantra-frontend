import React from "react";
import MarqueeComp from "../marquee/MarqueeComp";
import CountDown from "../countDown/CountDown";

const Description = () => {
  return (
    <div className="bg-zinc-300 h-[800px] sm:min-h-screen flex flex-col justify-around">
      <hr className="border-gray-800 " />
      <div className="flex flex-col justify-center sm:items-center sm:flex-row sm:justify-around px-10 gap-5 sm:gap-0">
        <ul className="flex flex-col gap-2 font-sans text-5xl sm:text-7xl font-bold text-gray-200 drop-shadow-lg shadow-black grow sm:grow-0">
          <li className="drop-shadow-lg shadow-black ">Connect</li>
          <li className="text-gray-900 drop-shadow-lg shadow-black animate-pulse">
            Collaborate
          </li>
          <li className=" drop-shadow-lg shadow-black">Catalyze.</li>
        </ul>
        <CountDown />
      </div>
      <MarqueeComp mdir="left" />
    </div>
  );
};

export default Description;
