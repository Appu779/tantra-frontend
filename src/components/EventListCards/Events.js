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

  // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Attach the event listener
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="event_cards text-[black] bg-[#090E41] min-h-screen">
      <Navbar pg="ot" />
      <h1 className="text-center text-5xl text-gray-200 pt-24 sm:pt-20 arca">
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen lg:grid-cols-3 gap-y-10 sm:gap-y-20 py-12 sm:p-20">
        {eventsData.map((value, index) => {
          return <Cards data={value} key={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
