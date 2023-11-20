import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cards from "./Cards";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Events({ eventsData }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="event_cards text-[black] font-[Quicksand]">
      <Navbar pg="ot" />
      <h1 className="text-center text-5xl text-gray-200 font-mono pt-24 sm:pt-20">
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-20 py-12 sm:p-20">
        {eventsData.map((value, index) => {
          return <Cards data={value} key={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
