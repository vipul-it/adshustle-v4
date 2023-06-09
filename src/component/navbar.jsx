import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

import Logo from "../assets/navbar/logo2.png";
import aboutus from "../Routes/aboutus";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg header">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
        </Link>
        <div
          className={
            showMediaIcon
              ? "collapse navbar-collapse justify-content-end mobile-device"
              : "collapse navbar-collapse justify-content-end"
          }
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link text-white">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact-us" className="nav-link text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <a
            href=""
            className="text-black hamburger-icon"
            onClick={(e) => {
              e.preventDefault();
              setShowMediaIcon(!showMediaIcon);
            }}
          >
            <GiHamburgerMenu size="1.7rem" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
