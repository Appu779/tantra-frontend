import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/icons/Arrow.svg";
import mecht from "../../assets/nav/mechtrans_.gif";
import depmech from "../../assets/nav/depcardmech.svg";
import arr from "../../assets/nav/arrowpixel.svg";

const DepCard = (props) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.cdnfonts.com/css/arcade-classic";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  let navigate = useNavigate();

  return (
    <div
      className="w-full sm:w-4/6 mx-auto h-[130px] sm:h-auto flex flex-col justify-center items-center  sm:mt-12 md:gap-4 md:mt-4 dep-card"
      onClick={() => navigate(props.explore)}
    >
      <div className="cursor-pointer relative h-full w-full sm:w-4/5 md:w-full overflow-hidden transition-all duration-500 transform hover:scale-110">
        <div className="absolute sm:top-[20%] left-[5%] flex items-center md:gap-2">
          <img
            className="w-[72px] h-[74px] sm:h-32 sm:w-32"
            src={props.gurl}
            alt=""
          />
          <h3 className="w-full mt-5 text-white text-xl sm:text-lg md:text-xl lg:text-4xl sm:ml-5 font-bold text-left pl-4 sm:pl-2 pr-10 md:pr-4 arca">
            {props.title}
          </h3>
        </div>
        <img className="w-full" src={props.imgsrc} alt="" />
        <img
          src={arr}
          alt=""
          className="absolute bottom-[35%] right-[8%] w-10 sm:w-8 md:w-10"
        />
      </div>
    </div>
  );
};

export default DepCard;
