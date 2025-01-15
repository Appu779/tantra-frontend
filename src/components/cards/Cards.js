import React from "react";
import "./Cards.css";
import DepCard from "./EventCard";
import CardsData from "../../data/cardsData/CardsMinimal";
import green from "../../assets/music_band/diag multi colored 1.png";

function Cards() {
  return (
    <div className="bg-[#090E41]">
      {/* Full-width image at the top with no margin or padding */}
      <img src={green} alt="Decorative Top Image" className="w-full" />

      <h1 className="text-center pt-40 font-bold text-gray-200 text-6xl sm:text-8xl arca mt-0">
        Events
      </h1>

      <div className="flex flex-col py-14 mx-5 md:px-20 lg:px-40 cont-wrap">
        {CardsData.map((value, index) => {
          return (
            <DepCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              gurl={value.gif}
              explore={value.explore}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
