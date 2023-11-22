import React from "react";
// import "./style.css";
import ViewDetails from "../popup/ViewDetails";
import { Call, LocationOn, Person, Timer } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  let navigate = useNavigate();
  let eventData = props.data;

  console.log(typeof fee);
  return (
    <div className="w-72 p-1 rounded-2xl overflow-hidden shadow-lg bg-gray-200 mx-auto ">
      {/*change angle of transition, 3d effect of turning the card here, in perspective */}
      <div class="group h-96 w-50 [perspective:5000px]">
        {/*change speed of transition here, in duration */}
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <div className="h-44 w-30 rounded-2xl bg-black py-16">
              <div className="text-center text-white font-bold font-serif text-3xl mb-2 h-16">
                {eventData.name}
              </div>
            </div>
            <div className="flex flex-col px-3 font-mono ">
              <p className="flex flex-row justify-between pt-3">
                <span className="bg-gray-800 text-white px-2 py-1 rounded-lg grow mr-3 text-center">
                  {props.data.event_type}
                </span>
                <span className="border border-gray-900 bg-gray-300 px-1 py-1 rounded-lg">
                  Reg Fee{" "}
                  <span className="bg-gray-800 text-white px-2 py-0.5 rounded-md">
                    {eventData.fee}
                  </span>
                </span>
              </p>
              <p className="text-sm flex pt-4 min-h-[56px]">
                <LocationOn />
                <span className="pl-2">{eventData.venue}</span>
              </p>
              <p className="text-sm self-start">
                <Timer />
                <span className="pl-2 align-bottom">{eventData.time}</span>
              </p>
              <p className="text-sm self-start pt-2 pb-3">
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
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/100 px-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-between overflow-hidden py-5">
              <div className="grow my-auto flex flex-col justify-center ">
                <h1 class="text-3xl font-bold py-3">{props.data.name}</h1>
                <p class="text-base ">{props.data.description}</p>
              </div>

              <div className="flex justify-center gap-5 w-full">
                <button
                  className="text-gray-900  bg-gray-300 font-mono rounded-full px-4 py-1.5 text-center"
                  onClick={() => {
                    if (eventData.reg)
                      navigate("/register", { state: eventData });
                  }}
                >
                  {eventData.reg ? "Register Event" : "Closed"}
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
