import AEI from "../../assets/departments/aei.svg";
import CE from "../../assets/departments/ce.svg";
import CS from "../../assets/departments/cs.svg";
import CSBS from "../../assets/departments/csbs.svg";
import CSCY from "../../assets/departments/cscy.svg";
import CSD from "../../assets/departments/csd.svg";
import ECE from "../../assets/departments/ec.svg";
import EEE from "../../assets/departments/eee.svg";
import ME from "../../assets/departments/mech.svg";

import AG from "../../assets/departments/mechtrans_.gif";
import BG from "../../assets/departments/adsgif.gif";
import CG from "../../assets/departments/aeigif.gif";
import DG from "../../assets/departments/cegif.gif";
import EG from "../../assets/departments/csgif.gif";
import FG from "../../assets/departments/csdgif.gif";
import GG from "../../assets/departments/ecgif.gif";

const CardsData = [
  {
    imgsrc: EEE,
    gif: EG,
    title: "Computer Science Engineering",
    text: "Events conducted by Department of Computer Science and Engineering ",
    explore: "/cse-events",
  },
  {
    imgsrc: ME,
    gif: AG,
    title: "Mechanical Engineering",
    text: "Events conducted by Department of Mechanical Engineering",
    explore: "/me-events",
  },
  {
    imgsrc: ECE,
    gif: FG,
    // title: "Artificial Intelligence And Data Science",
    title: "Artificial Intelligence",
    text: "Events conducted by Department of Artificial Intelligence and Data Science",
    explore: "/ads-events",
  },
  {
    imgsrc: CE,
    gif: BG,
    title: "Civil Engineering",
    text: "Events conducted by Department of Civil Engineering",
    explore: "/ce-events",
  },
  {
    imgsrc: ECE,
    gif: CG,
    title: "Electronics And Communication",
    text: "Events conducted by Department of Electronics and Communication Engineering",
    explore: "/ece-events",
  },
  {
    imgsrc: AEI,
    gif: DG,
    // title: "Applied Electronics And Instrumentation",
    title: "Applied Electronics",
    text: "Events conducted by AEI Department",
    explore: "/aei-events",
  },
  {
    imgsrc: EEE,
    gif: EG,
    title: "Electrical And Electronics",
    text: "Events conducted by EEE Department",
    explore: "/eee-events",
  },

  {
    imgsrc: CSD,
    gif: GG,
    title: "Computer Science And Design",
    text: "Events conducted by Department of Computer Science And Design",
    explore: "/csd-events",
  },
  {
    imgsrc: CSBS,
    gif: AG,
    title: "Computer Science And Business",
    text: "Events conducted by Department of Computer Science And Business",
    explore: "/csbs-events",
  },
  {
    imgsrc: CSCY,
    gif: BG,
    // title: "Computer Science And Cyber Security",
    title: "Computer Science And Cyber",
    text: "Events conducted by Department of Computer Science And Cyber Secuirity",
    explore: "/cscy-events",
  },
  {
    imgsrc: CS,
    gif: GG,
    title: "Common Events",
    text: "Events conducted by Department of Computer Science And Cyber Secuirity",
    explore: "/com-events",
  },
];

export default CardsData;
