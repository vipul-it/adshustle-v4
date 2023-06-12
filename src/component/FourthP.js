import React from "react";
import "./FourthP.css";

const FourthP = () => {
  return (
    <div>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 boxesContainer sixth-page-content">
        <div className="col-md s-card" id="spec">
          {/* <h2>Our <br></br><span>Specialities</span></h2> */}
          <h2>
            Our <span>Specialities</span>
          </h2>
        </div>

        <div className="col-md cardBox" id="adv">
          <div className="cardbody">
            <div className="front">
              <h3>Advertisers</h3>
            </div>
            <div className="back">
              <div className="s-desc">
                <p className="text-white">
                  We offer tailored solutions to meet your advertising needs,
                  whether you're looking to promote an app to a specific country
                  or reach a global audience. Our range of products are designed
                  to match your unique requirements, ensuring effective and
                  impactful results.
                </p>
              </div>
              <div className="key-points">
                <ul>
                  <li className="text-white">Targeted Advertising</li>
                  <li className="text-white">Real-time Analytics</li>
                  <li className="text-white">Conversion Tracking</li>
                  <li className="text-white">A/B Testing</li>
                  <li className="text-white">ROI Optimization</li>
                  <li className="text-white">Performance-based Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md cardBox" id="pub">
          <div className="cardbody">
            <div className="front">
              <h3>Publishers</h3>
            </div>
            <div className="back">
              <div className="s-desc">
                <p>
                  Unlock your revenue potential with our cutting- edge
                  technology. Our platform allows us to target the most relevant
                  ads for your audience, no matter where they are located,
                  delivering unparalleled eCPMs and maximum returns for your
                  business.{" "}
                </p>
              </div>
              <div className="key-points">
                <ul>
                  <li>Real-Time Performance Tracking</li>
                  <li>Fraud Protection Measures</li>
                  <li>Customized Ad Formats</li>
                  <li>Dedicated Account Management</li>
                  <li>Smart Campaign Links</li>
                  <li>Transparent reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthP;
