import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from "@mui/icons-material/School";
import Arrow from "../../assets/svg/Arrow.svg";
import { Link } from "react-scroll";
import { LocationOn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="rounded-t-2xl sm:rounded-none bg-zinc-300 text-gray-800 p-10 pl-5 w-full">
      <div className="grid grid-cols-3 gap-6 sm:gap-20 sm:px-20 pt-5 py-10 font-mono">
        <div className="col-span-3 sm:col-span-1">
          <h1 className="text-4xl sm:text-6xl relative font-bold flex sm:flex-col pl-4 sm:pl-0">
            Connect with us.{" "}
            <span className="mr-10  pt-5 hidden sm:block sm:mr-10 rotate-45 sm:rotate-0 ">
              <img src={Arrow} alt="Arrow" />
            </span>
          </h1>
        </div>
        <div className="col-span-1 sm:col-span-1 sm:mx-auto sm:self-center font-semibold text-gray-600">
          <ul className=" flex flex-col gap-3  text-3xl pl-4 sm:pl-0">
            <li className="sm:cursor-pointer ">
              <Link smooth spy to="home">
                Home
              </Link>
            </li>
            <li className="sm:cursor-pointer ">
              <Link smooth spy to="events">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 font-semibold pl-10 sm:pl-0 sm:w-2/3 sm:mx-auto sm:self-center">
          <p className="flex flex-col gap-2 sm:gap-7 text-gray-600 pt-0.5  sm:pt-0 ">
            Jyothi Nagar, Chemperi (P.O) Kannur 670632, Kerala, India
            <a href="https://maps.app.goo.gl/MTAuhiGcovmXgkTd7" target="_blank">
              <LocationOn className="text-gray-800" />
              <span className="pl-1 text-gray-500">View on map</span>
            </a>
          </p>
        </div>
        <p className="absolute -rotate-90 text-md text-gray-900 font-sans right-0 hidden sm:block">
          tantra'23
        </p>
      </div>

      <div className="flex justify-between sm:px-20">
        <a href="mailto:webteamtantra@gmail.com">
          <EmailIcon />{" "}
          <span className="italic text-sm sm:text-base font-semibold text-gray-600">
            webteamtantra@gmail.com
          </span>
        </a>

        <ul className="flex gap-3 sm:gap-10 sm:pr-24">
          <li>
            <a href="https://www.instagram.com/tantra._23/" target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://vjec.ac.in" target="_blank">
              <SchoolIcon />
            </a>
          </li>
          <li>
            <a href="tel:9567591753">
              <PhoneIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
