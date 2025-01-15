import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import crtImage from "../../assets/crt_land.png";
import mobileVideo from "../../assets/videos/potrait.mp4";
import desktopVideo from "../../assets/videos/landscape.mp4";
import BouncingGame from "../BouncingGame/BouncingGame";
import "./Poster.css";
import Tantratitle from "../../assets/videos/pxArt.png";

function Poster() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrolled = window.scrollY;
      const triggerPoint = vh * 0.25; // 20vh trigger point
      const triggerPoint2 = vh * 0.2; // 20vh trigger point
      const opacity =
        scrolled >= triggerPoint
          ? Math.max(1 - (scrolled - triggerPoint) / (vh * 0.09), 0)
          : 1;
      document.querySelector(".background-video").style.opacity = opacity;

      if (scrolled >= triggerPoint2) {
        document
          .querySelector(".img-container")
          .classList.add("scale-on-scroll");
      } else {
        document
          .querySelector(".img-container")
          .classList.remove("scale-on-scroll");
      }

      // Add fade-in effect for the "Meet you on 8 Nov" text
      const textTriggerPoint = vh * 0.4; // 50vh trigger point
      const textElement = document.querySelector(".fade-text");
      if (textElement) {
        if (scrolled >= textTriggerPoint && scrolled < vh * 1.5) {
          textElement.style.opacity = 1;
          textElement.style.transform = "translateY(0)";
        } else {
          textElement.style.opacity = 0;
          textElement.style.transform = "translateY(50px)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fill">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        src={isMobileDevice ? mobileVideo : desktopVideo}
      ></video>
      <img src={Tantratitle} id="Tantratitle" alt="Above CRT" />
      <div className="img-container fade-up max-sm:pb-60">
        <img
          src={crtImage}
          className="svg-logo max-sm:scale-75"
          alt="CRT Image"
        />
        <div className="bouncing-game-container">
          <BouncingGame />
        </div>
      </div>
      <div className="fade-text">
        Meet you on <span className="text-gray-300 animate-pulse">8 Nov</span>
      </div>
    </div>
  );
}

export default Poster;