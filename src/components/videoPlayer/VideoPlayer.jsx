import React, { useEffect } from "react";
import video from "../../assets/gif/intro.gif";
import vid from "../../assets/videos/promo.mp4";
import "./player.css"
import {useState} from 'react';
import { useRef } from 'react';
import play from "../../assets/gif/icon-park-solid_play.png";


const VideoPlayer = () => {
  const [isActive, setIsActive] = useState(false);
  const setPlayer = () => {
    (!isActive) ? setIsActive(true) : setIsActive(false);
    PlayPause();
  };

  const PlayPause = () => {
    if (!isActive) {
      child.current.play();
    } else {
      child.current.pause();
    }
  }
  const child = useRef(null);
  return (
    <div className="absolute left-[50vw] -ml-[207px] max-[700px]:-ml-32 top-[50vh] -mt-7 max-[700px]:mt-[50px] ease-in-out duration-500" style={
      window.innerWidth <= '700' ? ({
      left: isActive ? '50vw' : '',
      marginLeft:isActive ? '-46vw' : '',
      top:isActive ? '50vw' : '',
      marginTop:isActive ? '15vw' : '',
    }):({
      left: isActive ? '50vw' : '',
      marginLeft:isActive ? '-30vw' : '',
      top:isActive ? '50vh' : '',
      marginTop:isActive ? '-15vw' : '',
    })}>
    <div className="w-[415px] h-24 overflow-hidden relative ease-in-out duration-500 max-[700px]:w-64 max-[700px]:h-[85px] " id="player" 
    style=
      { window.innerWidth <= '700' ? ({ 
        width: isActive ? '92vw' : '',
        height:isActive ? 'fit-content' : '',
        borderRadius: isActive ? '10px': '',}
        ):(
          {
          width: isActive ? '60vw' : '',
        height:isActive ? 'fit-content' : '',
        borderRadius: isActive ? '10px': '',
        })
      }>
      <div className="play duration-500" style={{
        border: isActive ? 'none': '',
      }}></div>
      <button onClick={setPlayer} className="w-[55px] h-[55px] z-10 bg-transparent left-4 absolute mt-4 rounded-full ease-in-out duration-500"
      style={{
        backgroundColor : isActive ? 'rgba(0,0,0,0.5)' : '',
        fontSize: isActive ? '50px': '',
        width: isActive ? '50px' : '',
        height :isActive ? '50px' : '',
        fontSize: isActive ? '20px': '',
      }}
      >
        {isActive ? '⛌' : ''}
        <img src={play} className="w-auto" style={{display:isActive ? "none" : "block",}} />
      </button>
      <img src={video} alt=""className="w-[100%] h-[100%]"style={{display:isActive ? 'none' : 'block',}}/>
      <video  ref={child} className="video duration-500" style={{
        display:isActive ? 'block' : 'none',
        margin: isActive ? 'auto' : '',
    }}>
        <source src={vid} type="video/mp4"/>
      </video>
    </div>
    </div>
  );
};


export default VideoPlayer;
