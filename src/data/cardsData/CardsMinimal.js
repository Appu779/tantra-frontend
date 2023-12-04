import Mechanical from "../../assets/departments/mechanical.jpg";
import Computer from "../../assets/departments/computer.jpg";
import Civil from "../../assets/departments/civil.jpg";
import ECE from "../../assets/departments/communication.jpg";
import EEE from "../../assets/departments/electrical.jpg";
import AEI from "../../assets/departments/instrumentation.jpg";
import ASH from "../../assets/departments/humanities.jpg";
import ADS from "../../assets/departments/artificial.jpg";
import Games from "../../assets/departments/games.jpg";

const CardsData = [
  {
    imgsrc: Mechanical,
    title: "Mechanical",
    text: "Events conducted by Department of Mechanical Engineering",
    explore: "/me-events",
  },
  {
    imgsrc: Computer,
    title: "Computer Science ",
    text: "Events conducted by Department of Computer Science & Engineering ",
    explore: "/cse-events",
  },
  {
    imgsrc: Civil,
    title: "Civil",
    text: "Events conducted by Department of Civil Engineering",
    explore: "/ce-events",
  },
  {
    imgsrc: ECE,
    title: "Electronics & Communication",
    text: "Events conducted by Department of Electronics & Communication Engineering",
    explore: "/ece-events",
  },
  {
    imgsrc: AEI,
    title: "Applied Electronics & Instrumentation",
    text: "Events conducted by AEI Department",
    explore: "/aei-events",
  },
  {
    imgsrc: EEE,
    title: "Electrical & Electronics",
    text: "Events conducted by EEE Department",
    explore: "/eee-events",
  },
  {
    imgsrc: ADS,
    title: "Artificial Intelligence & Data Science",
    text: "Events conducted by Department of Artificial Intelligence & Data Science",
    explore: "/ads-events",
  },
  {
    imgsrc: ADS,
    title: "Computer Science & Design",
    text: "Events conducted by Department of Computer Science & Design",
    explore: "/csd-events",
  },
  {
    imgsrc: ADS,
    title: "Computer Science & Business Systems",
    text: "Events conducted by Department of Computer Science & Business",
    explore: "/csbs-events",
  },
  {
    imgsrc: ADS,
    title: "Computer Science & Cyber Security",
    text: "Events conducted by Department of Computer Science & Cyber Secuirity",
    explore: "/cscy-events",
  },

  // {
  //   imgsrc: Games,
  //   title: "Common Events",
  //   text: "Events common for all...",
  //   explore: "/com-events",
  // },
];

export default CardsData;
