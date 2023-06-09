import React from "react";

import "./sixthpage.css";

const sixthpage = () => {
  return (
    <>
      <div className="sixthpage">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 sixth-page-content">
          <div className="col-md s-card" id="spec">
            <h2>
              Our <br></br>
              <span>Specialities</span>
            </h2>
          </div>

          <div className="col-md s-card" id="adv">
            <h3>Advertisers</h3>
          </div>
          <div className="col-md s-card" id="pub">
            <h3>Publishers</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default sixthpage;
