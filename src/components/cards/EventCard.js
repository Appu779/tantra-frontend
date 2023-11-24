import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Cards.css";
import Arrow from "../../assets/icons/Arrow.svg";

function EventCard(props) {
  let navigate = useNavigate();

  return (
    <div
      className="sm:cursor-pointer border-b last:border-b-0 border-gray-400 py-10 "
      onClick={() => navigate(props.explore)}
      aria-selected="false"
    >
      <h2 className="font-mono font-bold text-gray-400 text-3xl sm:text-5xl sm:w-3/4 whitespace-pre-wrap hover:scale-105 hover:pl-3 hover:w-4/5 hover:text-gray-200">
        {props.title}
        <p className="font-sans font-light text-2xl">Engineering</p>
      </h2>
    </div>
  );
}

export default EventCard;
