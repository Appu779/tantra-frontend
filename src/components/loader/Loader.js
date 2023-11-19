import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;