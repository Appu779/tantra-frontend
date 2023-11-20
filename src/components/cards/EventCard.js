import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Cards.css";
import Arrow from "../../assets/icons/Arrow.svg";

function EventCard(props) {
  let navigate = useNavigate();

  return (
    <div className="flex justify-between border-b border-gray-400 py-10">
      <h2 className="font-mono font-bold text-gray-400 text-3xl sm:text-5xl w-40 sm:w-96 whitespace-pre-wrap">
        {props.title}
        <p className="font-sans font-light text-2xl">
          {props.title != "Common Events" ? "Engineering" : ""}
        </p>
      </h2>
      <button className="scale-50" onClick={() => navigate(props.explore)}>
        <img src={Arrow} className="h-20 -rotate-90" />
      </button>
    </div>
  );
}

export default EventCard;
