import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import Arrow from "../../assets/svg/Arrow.svg";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="rounded-t-2xl sm:rounded-none bg-zinc-300 text-black p-10 w-full">
      <div className="grid grid-cols-3 gap-6 sm:gap-20 sm:px-20 py-10 font-mono">
        <div className="col-span-3 sm:col-span-1">
          <h1 className="text-4xl sm:text-6xl relative font-bold flex sm:flex-col">
            Connect with us.{" "}
            <span className="mr-10  pt-5 hidden sm:block sm:mr-10 rotate-45 sm:rotate-0 ">
              <img src={Arrow} alt="Arrow" />
            </span>
          </h1>
        </div>
        <div className="col-span-1 sm:col-span-1 sm:mx-auto sm:self-center">
          <ul className="text-xl w-full h-full">
            <li className="sm:cursor-pointer text-3xl pb-3">
              <Link smooth spy to="home">
                Home
              </Link>
            </li>
            <li className="sm:cursor-pointer text-3xl">
              <Link smooth spy to="events">
                Events
              </Link>
            </li>
            {/* <li className="py-2">
              <Link smooth spy to="contacts" style={{ cursor: "pointer" }}>
                Contacts
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 pl-20 sm:pl-0 sm:w-2/3 sm:mx-auto sm:self-center">
          <a href="https://maps.app.goo.gl/MTAuhiGcovmXgkTd7" target="_blank">
            <p>Jyothi Nagar, Chemperi (P.O) Kannur 670632, Kerala, India</p>
          </a>
        </div>
        <p className="absolute -rotate-90 text-md text-gray-900 font-sans right-0 hidden sm:block">
          tantra'23
        </p>
      </div>

      <div className="flex justify-between sm:px-20">
        <div>
          <a href="mailto:webteamtantra@gmail.com">
            <EmailIcon /> webteamtantra@gmail.com
          </a>
        </div>
        <ul className="flex gap-4 sm:gap-10 sm:pr-24">
          <li>
            <a href="https://www.instagram.com/tantra._23/" target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tantra-techfest-1a2381258/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="tel:">
              <PhoneIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
