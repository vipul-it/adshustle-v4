import React from "react";
import "./fourthbanner.css";
import ContactUs from "./ContactUs";
const fourthbanner = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <p>Strategize</p>
            </div>
            <div class="slide">
              <p>Optimize</p>
            </div>
            <div class="slide">
              <p>Achieve</p>
            </div>
            <div class="slide">
              <p>Strategize</p>
            </div>
            <div class="slide">
              <p>Optimize</p>
            </div>
            <div class="slide">
              <p>Achieve</p>
            </div>
            <div class="slide">
              <p>Strategize</p>
            </div>
            <div class="slide">
              <p>Optimize</p>
            </div>
            <div class="slide">
              <p>Achieve</p>
            </div>
            <div class="slide">
              <p>Strategize</p>
            </div>
          </div>
        </div>
        <div className="wrapper-sec">
          <div className=" mt-3">
            <p
              type="button"
              className=""
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Let's Talk
            </p>
           
          </div>
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default fourthbanner;
