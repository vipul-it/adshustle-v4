import React from "react";
import "./landingpage.css";
import Homepage from "./Homepage";

import Fifthpage from "./fifthpage";
import Seventhpage from "./seventhpage";
import Team from "./team";
import Event from "./event";
import Brands from "./brands";
import Sixthcard from "./sixthcard";

import Footer from "./footer";
import Navbar from "./navbar";
import AboutUs from "./AboutUs";
import SecondP from "./SecondP";

const landingpage = () => {
  return (
    <div className="">
        
      <div className="child-section-main">
        <Navbar/>
        <Homepage />
      </div>
      <div className="child-section-main">
       

        <SecondP />
      </div>

      <div className="child-section-main">
        <Fifthpage />
      </div>
      <div className="child-section-main">
        {/* <Sixthcard /> */}
      </div>
      <div className="child-section-main">
        {/* <AboutUs /> */}
      </div>
      <div className="child-section-main">
        {/* <Seventhpage /> */}
        {/* <Brands /> */}
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
