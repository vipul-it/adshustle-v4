import React, { useState, useEffect, useRef } from "react";
import {Link as ScrollLink} from "react-scroll"

import "./home.css";


import work from "../assets/homepage/bgV/1.mp4";
import play from "../assets/homepage/bgV/2.mp4";
import hustle from "../assets/homepage/bgV/3.mp4";

import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";

const Home = () => {
  const words = ["Work", "Play", "Hustle"];
  const videos = [work, play, hustle];
  const wordDescs = [
    "To Boost Your APP Performance",
    "With Innovative Ideas & Creativity",
    "To Exceed All Expectations & Achieve Success",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setSlideIn(true);
      setTimeout(() => setSlideIn(false), 1000);
      setSlideLeft(true);
      setTimeout(() => setSlideLeft(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  const navigate = useNavigate();

  const navigateToButton = () => {
    navigate("about");
  };

  return (
    <div className="section1">
      <div className={`hero-video ${slideLeft ? "slide-left" : ""}`}>
        <video autoPlay muted loop key={videos[currentVideoIndex]}>
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
      </div>
      <div className="hero-page">
        <div className="hero-content">
          <div className="mid-content">
            <h1>We</h1>
            {/* <div className={`words ${slideIn ? "" : "slide-in"}`}> */}
            {/* <span>{words[currentWordIndex]}</span> */}
            <div className="words">
              <span>Work</span>
              <span>Play</span>
              <span>Hustle</span>
            </div>
          </div>
          <div className={`last-content ${slideIn ? "" : "slide-in"}`}>
            <div className="word-desc">
              {/* <p>{wordDescs[currentWordIndex]}</p> */}
              <p>To Boost Your APP Performance</p>
              <p>With Innovative Ideas & Creativity</p>
              <p>To Exceed All Expectations & Achieve Success</p>
            </div>
          </div>
          <div className="hero-btn">
            <div className="">
              <button
                className="fw-bolder"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Let's Talk
              </button>
              <ContactUs />
            </div>

            <button className="fw-bolder" onClick={navigateToButton}>
            <ScrollLink
              className="nav-link text-white"
                  to="discover"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
                >
                  Discover More
                </ScrollLink>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;