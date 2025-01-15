import React, { useRef, useEffect, useState } from "react";
import bandGif from "../../assets/music_band/music.gif";
import date from "../../assets/music_band/date.webp";
import bg from "../../assets/music_band/bg.png";
import mobilBg from "../../assets/music_band/music band back mobile.png";
import green_1 from "../../assets/music_band/rounded colored 1.svg";

function MusicBand() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [gifInView, setGifInView] = useState(false);
  const [dateInView, setDateInView] = useState(false);
  const gifRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    // Intersection Observers for animations
    const observer = new IntersectionObserver(
      ([entry]) => setGifInView(entry.isIntersecting),
      { threshold: 0.5 }, // Trigger when 50% of the GIF is in view
    );

    const dateObserver = new IntersectionObserver(
      ([entry]) => setDateInView(entry.isIntersecting),
      { threshold: 0.5 },
    );

    if (gifRef.current) observer.observe(gifRef.current);
    if (dateRef.current) dateObserver.observe(dateRef.current);

    // Cleanup intersection observers
    return () => {
      if (gifRef.current) observer.unobserve(gifRef.current);
      if (dateRef.current) dateObserver.unobserve(dateRef.current);
    };
  }, []);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#107800] flex flex-col items-center pt-28 md:min-h-screen relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-slideUp {
            animation: slideUp 1s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>

      {/* Header Title */}
      <h2 className="text-white text-center font-arcade_classic max-sm:text-2xl md:text-3xl pt-8 md:pt-16 mb-5 mt-20 md:mt-24">
        VALLOPPILLY HALL
      </h2>

      {/* Main Content Container */}
      <div className="relative flex justify-center items-center w-full lg:max-w-[90%] lg:mt-4 mt-8">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center items-center z-0 select-none">
          <img
            src={isMobile ? mobilBg : bg}
            alt="MUSIC BAND"
            className="w-full h-auto"
          />
        </div>

        {/* Band GIF with Animation */}
        <div
          ref={gifRef}
          className={`relative z-10 w-full lg:my-4 my-4 ${
            isMobile ? "scale-125" : "scale-100"
          } ${gifInView ? "animate-fadeIn" : ""} transition-transform`}
        >
          <img src={bandGif} alt="Band Members" className="w-full h-auto" />
        </div>
      </div>

      {/* Date with Slide-Up Animation */}
      <img
        ref={dateRef}
        src={date}
        alt="Event Date"
        className={`mt-8 lg:mt-4 w-1/2 md:w-1/3 lg:w-1/4 px-6 py-3 text-black text-lg font-bold rounded-lg active:scale-95 transition transform ${
          dateInView ? "animate-slideUp" : ""
        }`}
      />

      {/* Full-width image at the bottom */}
      <div className="w-screen mt-8 lg:mt-4 p-0 m-0 mb-0">
        <img src={green_1} alt="Image 1" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default MusicBand;
