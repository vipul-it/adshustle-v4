import React from "react";
import "./landingpage.css";
import Homepage from "./homepage";
import Secondpage from "./secondpage";
import Thirdpage from "./thirdpage";
import Fifthpage from "./fifthpage";
import Seventhpage from "./seventhpage";
import Team from "./team";
import Event from "./event";
import Brands from "./brands";
import Sixthcard from "./sixthcard";
import Fourthbanner from "./fourthbanner";
import Footer from "./footer";
import Navbar from "./navbar";

const landingpage = () => {
  return (
    <div className="">
        
      <div className="child-section-main">
        <Navbar/>
        <Homepage />
      </div>
      <div className="child-section-main">
        <Secondpage />
        <Thirdpage />
        <Fourthbanner />
      </div>

      <div className="child-section-main">
        <Fifthpage />
      </div>
      <div className="child-section-main">
        <Sixthcard />
      </div>
      <div className="child-section-main">
        <Seventhpage />
        <Brands />
      </div>
      <div className="child-section-main">
        <Team />
        <Event />
        <Footer />
      </div>
    </div>
  );
};

export default landingpage;
