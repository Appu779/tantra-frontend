import React from "react";
// import ViewDetails from "../popup/ViewDetails";
import { Call, Group, LocationOn, Person, Timer } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  let navigate = useNavigate();
  let eventData = props.data;

  return (
    <div className="w-80 p-1 rounded-2xl overflow-hidden shadow-lg bg-gray-200 mx-auto ">
      {/*change angle of transition, 3d effect of turning the card here, in perspective */}
      <div className="group h-[404px] w-50 [perspective:5000px]">
        {/*change speed of transition here, in duration */}
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <div className="h-44 w-30 rounded-xl bg-gradient-to-l from-gray-800 via-gray-900 to-black py-16">
              <div className="text-center text-gray-200 font-bold font-mono text-3xl ">
                {eventData.name}
              </div>
            </div>
            <div className="flex flex-col font-mono ">
              <p className="flex flex-row justify-between pt-3 px-1">
                <span className="bg-gray-900 text-white py-1 rounded-lg mr-1 text-center w-4/12 grow self-center h-[34px] overflow-hidden">
                  {props.data.event_type}
                </span>
                <span className="border border-gray-900 bg-gray-300 text-center py-1 rounded-lg w-5/12">
                  Reg Fee
                  <span className="bg-gray-900 text-white px-1 ml-1 py-0.5 rounded-md text-center ">
                    {eventData.fee}
                  </span>
                </span>
              </p>
              <p className="text-sm flex px-2  pt-4 h-[56px] overflow-hidden">
                <LocationOn />
                <span className="pl-2">{eventData.venue}</span>
              </p>
              <p className="text-sm self-start px-2">
                <Timer />
                <span className="pl-2 align-bottom">{eventData.time}</span>
              </p>
              <p className="text-sm self-start pt-2 px-2 pb-3">
                <Person />
                <span className="pl-2 align-bottom ">{eventData.student1}</span>
              </p>
              <p className="text-center self-center">
                <button className="bg-gray-900 text-white px-4 py-1 shadow-xl rounded-lg">
                  View Event
                </button>
              </p>
            </div>
          </div>

          {/*change color and transparency here, in bg */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/100 px-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-between overflow-hidden py-5">
              <div className="grow my-auto flex flex-col justify-center ">
                <h1 className="text-3xl font-bold py-3">{props.data.name}</h1>
                <p className="text-base ">{props.data.description}</p>
              </div>

              <div className="flex justify-center gap-2 sm:gap-5 w-full items-center">
                <p className="text-sm h-10 w-10 bg-black rounded-full py-2  ">
                  <span>{eventData.group ? <Group /> : <Person />}</span>
                </p>
                <button
                  className={`text-gray-900 grow bg-gray-300 font-mono rounded-full px-3 py-2 text-center ${
                    !eventData.reg ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (eventData.reg)
                      navigate("/register", { state: eventData });
                  }}
                >
                  {eventData.reg
                    ? "Register Event"
                    : eventData.spot
                    ? "Spot"
                    : "Closed"}
                </button>
                <p className="text-sm h-10 w-10 bg-gray-800 rounded-full py-2 text-green-500 ">
                  <a href={`tel:${eventData.s1_phone}`}>
                    <Call />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
