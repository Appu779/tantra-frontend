import React from "react";
import MarqueeComp from "../marquee/MarqueeComp";

const Description = () => {
  return (
    <div className="bg-zinc-300 py-10 h-[800px] sm:min-h-screen flex flex-col justify-around">
      <hr className="border-gray-800 pb-10" />
      <div className="flex flex-col mb-16">
        <ul className="px-16 sm:pl-28  flex flex-col gap-2 font-semibold font-sans text-5xl sm:text-7xl text-black">
          <li>Connect</li>
          <li>Collaborate</li>
          <li>Catalyze.</li>
        </ul>
      </div>
      <MarqueeComp mdir="left" />
    </div>
  );
};

export default Description;
