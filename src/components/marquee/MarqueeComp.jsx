import Marquee from "react-fast-marquee";

const MarqueeComp = ({ word, mdir = "left", rot = "rotate-0" }) => {
  return (
    <div className={rot + " w-full"}>
      <Marquee
        loop={0}
        speed={60}
        autoFill
        direction={mdir}
        // gradient
        // gradientColor="rgba(255, 255, 255, 0.3)"
        // gradientWidth={800}
      >
        <div className="py-3 bg-zinc-700">
          <p className="py-1.5 font-sans text-xl bg-black flex pl-3">
            TANTRA <span className="bg-gray-300  text-black mx-2 px-1">23</span>
            {/* <span className="mx-2">|</span> */}
            <ul className="flex flex-row gap-5 bg-gray-400 text-black list-disc mr-3">
              <li className="mr-2 list-none ml-2">WORKSHOPS</li>
              <li className="mr-2">EXHIBITIONS</li>
              <li className="mr-2">COMPETITIONS</li>
            </ul>
            {/* <span className="mx-2">|</span> */}
            {/* <span className="bg-gray-300 text-black"></span> */}
          </p>
        </div>

        {/* <p className="py-4 text-2xl bg-black">{word}!!!</p> */}
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
