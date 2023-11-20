import React from "react";
// import "./style.css";
import ViewDetails from "../popup/ViewDetails";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  let navigate = useNavigate();
  let eventData = props.data;
  return (
    <div className="w-72 p-4 rounded-3xl overflow-hidden shadow-lg bg-gray-200">
      <div className="h-44 w-30 rounded-xl bg-white"></div>
      <div className="pt-5">
        <div className="text-center font-bold font-mono text-3xl mb-2 h-16">
          {props.data.name}
        </div>
        <p className="text-center font-mono">{props.data.event_type}</p>
        <p className="text-center font-mono">
          {props.data.fee !== "" ? `Reg Fee: ${props.data.fee}` : "‎ "}
        </p>
      </div>
      <div className="px-0 pt-4 pb-2">
        <a>{/* <ViewDetails data={eventData} /> */}</a>
        {eventData.reg ? (
          <p className="text-center">
            <button
              className="bg-white font-mono text-black px-2 py-2 rounded-full"
              onClick={() => navigate("/register", { state: eventData })}
            >
              Register Event
            </button>
          </p>
        ) : (
          <p className="text-center">
            <button className="bg-white font-mono text-black px-2 py-2 rounded-full">
              Register Event
            </button>
          </p>
          // null
        )}
      </div>
    </div>
  );
}

export default Cards;
