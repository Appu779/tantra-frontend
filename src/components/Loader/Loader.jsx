// src/Loader.js
import React from "react";
import loaderGif from "./tantra.gif"; // Update this path if necessary

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
