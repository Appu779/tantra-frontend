import React from "react";

import "./Cards.css";
import WorkCard from "./EventCard";
import CardsData from "../../data/cardsData/CardsMinimal";

function Cards() {
  return (
    <div className=" mx-auto py-20">
      <h1 className="text-center font-mono font-bold text-gray-400 text-6xl sm:text-8xl">
        Events
      </h1>
      <div className="flex flex-col my-14 mx-10 md:px-20 lg:px-40">
        {CardsData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              explore={value.explore}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
