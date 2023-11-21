import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Desktop from "../../assets/bg/des.png";
import Mobile from "../../assets/bg/mob.png";
import ParticlesComponent from "../particles/ParticlesComponent";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import logo from "../../assets/svg/tantra.svg";

import "./Poster.css";

function Poster() {
  let isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  return (
    <div>
      {/* <div className='absolute top-[90px]'><ParticlesComponent className='part' /></div> */}
      <div className="particle_div ">
        <ParticlesComponent className="part" />
      </div>
      {/* <div id="tsparticles"></div> */}
      <div className="fill">
        {isMobileDevice ? (
          <img src={Mobile} alt="poster" className="intro_image" />
        ) : (
          <img src={Desktop} alt="poster" className="intro_image" />
        )}
      </div>
      <div className="absolute w-[100%] top-[50vh] sm:top-[45vh] -mt-[152px] text-center">
        <img src={logo} className="svg_logo" alt="" />
      </div>
      <div>
        <VideoPlayer />
      </div>
    </div>
  );
}

export default Poster;
