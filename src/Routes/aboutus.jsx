import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";
import about from "../assets/aboutus/about.png";
import Brands from "../component/brands";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Videobg from "../assets/aboutus/Cheers.mp4";
import ContactUs from "../component/ContactUs";
const aboutus = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <div className="about-left">
          <h3>About Us</h3>
          <div className="about-desc">
            <p>
              At Ads Hustle Pvt. Ltd., we take immense pride in our team of
              exceptionally talented and visionary professionals who possess a
              profound expertise in the domain of mobile game/app user
              acquisition. With an unwavering commitment to excellence, By
              seamlessly aligning our strategies with their unique requirements,
              we consistently deliver a user acquisition experience that is both
              efficient and effective. At the heart of our operations lie the
              latest advancements in Marketing Automation Tools, empowering us
              to deliver unparalleled solutions. We believe in the power of
              flexibility, offering a wide array of service models including
              CPI, CPA, CPC, CPE, and more. At Ads Hustle we are committed to
              transforming your aspirations into tangible success in the dynamic
              realm of mobile game/app user acquisition.
            </p>
          </div>
        </div>
        <div className="about-right">
          <video autoPlay muted loop>
            <source src={Videobg} type="video/mp4" />
          </video>
          {/* <img src={about} alt="" /> */}
        </div>
      </div>

      <div className="trusted-brands">
        <Brands />
      </div>

      <div className="blogs" id="blogs">
        <div className="blog-title">
          <h3>
            Online <span> Presence</span>
          </h3>
        </div>
        <div className="my-blog">
          <div className="blog">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7059397878191972352"
              height="500"
              width="500"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </div>
          <div className="blog">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7056498536275673088"
              height="500"
              width="500"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="last-section">
        <div className="left-sec">
          <p>Want to succeed in the digital world? We can help.</p>
        </div>
        <div className="right-sec">
          {/* <Link to="/contact-us" className="text-decoration-none">
            <p>Contact us</p>
          </Link> */}
          <div className="container mt-3">
            <p
              type="button"
              className=""
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Contact US
            </p>
          </div>
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default aboutus;
