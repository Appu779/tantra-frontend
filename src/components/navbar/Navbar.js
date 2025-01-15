import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import ir from "./icon_real.png";
import inv from "./invert.png";
import navm from "./nav_menu.png";
import nav_logo from "./nav_logo.gif";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [closeBtnSrc, setCloseBtnSrc] = useState(ir);

  const navToggle = () => {
    setNavOpen(!navOpen);
  };

  const changeSrcInvert = () => {
    setCloseBtnSrc(inv);
  };

  const changeSrcReal = () => {
    setCloseBtnSrc(ir);
  };

  const handleEventsClick = (path, n = true) => {
    if (n == true) {
      navToggle();
    }
    if (location.pathname !== "/") {
      // Navigate to home page first if not already there
      navigate("/");
      // Use a slight delay to scroll after navigation completes
      setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already on the home page, scroll directly
      document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  setTimeout(() => {
    const toggleButton = document.getElementById("nav-logo");
    const wheth = window.location.href.split("/");
    if (wheth.length == 4) {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY > window.innerHeight &&
          window.scrollY < window.innerHeight * 2.8
        ) {
          toggleButton.style.display = "none"; // Hide the button
        } else {
          toggleButton.style.display = "block"; // Show the button
        }
      });
    }
  }, 500);

  return (
    <header>
      <nav className="nav">
        <img
          id="nav-logo"
          src={nav_logo}
          alt="Logo"
          onClick={() => handleEventsClick("home", false)}
        />
        <div className="menu-and-logo cursor-pointer">
          <img id="nav-btn" src={navm} alt="Menu" onClick={navToggle} />
        </div>
      </nav>
      <div className={`nav-drop ${navOpen ? "toggle" : ""}`}>
        <div className="nav-close-btn"></div>
        <div className="nav-cont">
          <div className="close-btn cursor-pointer">
            <img
              id="close-btn-btn"
              src={closeBtnSrc}
              alt="Close"
              onClick={navToggle}
              onMouseEnter={changeSrcInvert}
              onMouseLeave={changeSrcReal}
            />
          </div>
          <a
            className="link-items arca"
            onClick={() => handleEventsClick("home")}
          >
            <h1>HOME</h1>
          </a>
          <a
            className="link-items arca"
            onClick={() => handleEventsClick("events")}
          >
            <h1>EVENTS</h1>
          </a>
          <a
            className="link-items arca"
            onClick={() => handleEventsClick("musicBand")}
          >
            <h1>SHOWS</h1>
          </a>
          <a
            className="link-items arca"
            onClick={() => handleEventsClick("footer")}
          >
            <h1>CONTACT US</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
