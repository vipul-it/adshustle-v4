import React from "react";

import "./footer.css";

import Logo from "../assets/footer/footer-logo.png";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const footer = () => {
  return (
    <>
      <div className="hero-footer">
        <div className="container footer-content">
          <div className="row footer">
            <div className="col left-footer">
              <div className="footer-logo">
                <img src={Logo} alt="" />
                <div className="connect">
                  <p>Let's Connect</p>
                  <div className="social-icons">
                    <BsFacebook />
                    <BsInstagram />
                    <BsLinkedin />
                  </div>
                </div>
              </div>
              <div className="copyright">
                <p>Copyright ©2023 Ads Hustle. All rights reserved.</p>
              </div>
              {/* <div className="footer-map">
                                <iframe  title='map address' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28041.36093842279!2d77.391765!3d28.534606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1683868995234!5m2!1sen!2sus" height="178" style={{ border: "0", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}
            </div>
            <div className="col right-footer">
              {/* <div className="right-footer-details">
                <div className="company">
                  <p id="cmp">Our Company</p>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                
                <div className="contact">
                  <p id="con">Contact</p>
                  <ul>
                    <li>Adshustle@gmail.com</li>
                  </ul>
                  <p id="address">Address</p>
                  <ul>
                    <li>
                      2343, Tower B, Landcraft Golf Links Site, Ghaziabad U.P.
                      201001 Idia.
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="footer-map">
                                <iframe  title='map address' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28041.36093842279!2d77.391765!3d28.534606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1683868995234!5m2!1sen!2sus" height="150" style={{ border: "0", width: "80%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
              
            </div>
            <div className="col right-footer">
              <div className="right-footer-details">
                <div className="company">
                  <p id="cmp">Our Company</p>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                
                <div className="contact">
                  <p id="con">Contact</p>
                  <ul>
                    <li>Adshustle@gmail.com</li>
                  </ul>
                  <p id="address">Address</p>
                  <ul>
                    <li>
                      2343, Tower B, Landcraft Golf Links Site, Ghaziabad U.P.
                      201001 Idia.
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
