import React from "react";
import MarqueeComp from "../marquee/MarqueeComp";

const Description = () => {
  return (
    <div className="bg-zinc-300 py-10 ">
      <hr className="border-gray-500 pb-10" />
      <div className="flex flex-col">
        <ul className="px-16 sm:pl-28 mb-10 flex flex-col gap-2 font-semibold font-sans text-4xl sm:text-7xl text-black">
          <li>Connect</li>
          <li>Collaborate</li>
          <li>Catalyze.</li>
        </ul>
      </div>
      <MarqueeComp mdir="left" />

      {/* <MarqueeComp rot="rotate-6" /> */}
    </div>
  );
};

export default Description;
