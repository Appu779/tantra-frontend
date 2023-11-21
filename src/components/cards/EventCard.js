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
      <button className="relative pb-12" disabled>
        <p className="text-xl text-gray-500 font-mono right-0 absolute sm:whitespace-nowrap">
          Coming soon <span className="hidden sm:block animate-ping">...</span>
        </p>
      </button>
    </div>
  );
}

export default EventCard;
