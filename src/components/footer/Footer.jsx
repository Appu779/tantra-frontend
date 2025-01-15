import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import image from "../../assets/footer/nintento.png"; // Ensure this path is correct
import "./Footer.css"; // Ensure to import the CSS file

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleEventsClick = (path) => {
    if (location.pathname !== "/") {
      // Navigate to home page first if not already there
      navigate("/");
      // Use a slight delay to scroll after navigation completes
      setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already on the home page, scroll directly
      document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-fit flex bg-[#bec0bfff]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
        `}
      </style>
      <div className="w-full md:w-1/2 mx-auto relative">
        <img src={image} className="w-full h-fit" alt="foot" />
        <div className="absolute font-arcade_classic top-0 left-[5%] w-[90%] px-[3%] py-[15%] box-border flex justify-between">
          <div className="flex flex-col gap-2 text-white font-semibold text-xs sm:text-sm md:text-lg">
            <a
              style={{ color: "#A3FF5C" }}
              className="cursor-pointer"
              onClick={() => handleEventsClick("home")}
            >
              HOME
            </a>
            <a
              className="cursor-pointer"
              onClick={() => handleEventsClick("events")}
            >
              EVENTS
            </a>
          </div>
          <div className="text-white w-[50%] text-right text-[8px] text-sm-custom sm:text-sm md:text-sm lg:text-lg">
            <TypeAnimation
              sequence={[
                "State Highway 59 Jyothi Nagar, Kannur District Chemperi, Kerala 670632",
                1000, // Pause for 1 second after typing
                "", // Clear the text
                5, // Pause for 0.5 seconds before retyping
              ]}
              wrapper="p"
              speed={40} // Typing speed in milliseconds
              cursor={true}
              repeat={Infinity} // Repeat indefinitely
              className="leading-tight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
