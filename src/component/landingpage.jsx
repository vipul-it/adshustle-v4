import React from "react";
import "./landingpage.css";
import Homepage from "./Homepage";

import Fifthpage from "./fifthpage";

import Team from "./team";
import Event from "./event";

import Footer from "./footer";
import Navbar from "./navbar";
import AboutUs from "./AboutUs";
import SecondP from "./SecondP";
import FourthP from "./FourthP";
import SeventhP from "./SeventhP";

const landingpage = () => {
  return (
    <div className="">
      <div className="child-section-main">
        <Navbar />
        <Homepage />
      </div>
      <div className="child-section-main">
        <SecondP />
      </div>

      <div className="child-section-main">
        <Fifthpage />
      </div>
      <div className="child-section-main">
        <FourthP />
      </div>
      <div className="child-section-main">
        <AboutUs />
      </div>
      <div className="child-section-main">
        <SeventhP />
      </div>
      <div className="child-section-main">
        {/* <Team /> */}
        {/* <Event /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default landingpage;
