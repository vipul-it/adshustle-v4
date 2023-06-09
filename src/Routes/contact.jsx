import React from "react";
import "./contact.css";

import man from "../assets/contact/contact.png";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
const contact = () => {
  return (
    <>
    <Navbar/>
      <div className="hero-contact">
        <div className="contact-heading">
          <h3>Let's Get In Touch</h3>
        </div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 my-forms">
          <div className="col-md contact-img">
            <img src={man} alt="man" />
          </div>
          <div className="col-md hero-form">
            <div className="form-content">
              <div className="form-head">
                <p>Send us a message</p>
              </div>
              <div className="form-inputs">
                <form>
                  <div className="form-field">
                    <label htmlFor="text">Your Name</label>
                    <input type="text" />
                  </div>
                
                  <div className="form-field">
                    <label htmlFor="text">Your Email</label>
                    <input type="text" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="text">Whatsapp/Contact No.</label>
                    <input type="text" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="text-area">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                  </div>
                  <div className="form-field send-button">
                    <button>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
