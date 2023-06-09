import React, { useEffect, useRef } from "react";
import "./seventhpage.css";
import Swiper from "swiper";

import img1 from "../assets/customer/customer1.png";
import img2 from "../assets/customer/customer2.png";
import img3 from "../assets/customer/customer3.png";

const Seventhpage = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const initializeSwiper = () => {
      swiperRef.current = new Swiper(".mySwiper", {
        slidesPerView: getSlidesPerView(),
        spaceBetween: 30,
        slidesPerGroup: getSlidesPerGroup(),
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });
    };

    const getSlidesPerView = () => {
      return window.innerWidth < 800 ? 1 : 3;
    };

    const getSlidesPerGroup = () => {
      return window.innerWidth < 800 ? 1 : 3;
    };

    initializeSwiper();

    window.addEventListener("resize", handleResize);

    function handleResize() {
      if (swiperRef.current) {
        swiperRef.current.params.slidesPerView = getSlidesPerView();
        swiperRef.current.params.slidesPerGroup = getSlidesPerGroup();
        swiperRef.current.update();
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 3000); // adjust the interval (in milliseconds) as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <>
      <div className="seventhpage">
        <div className="customer-heading">
          <p>
            Hear From Our <span>Clients</span>
          </p>
        </div>
        <section>
          <div className="swiper mySwiper container swiper-container-free-mode">
            <div className="swiper-wrapper content">
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img1} alt="client" />
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “High standard and excellent quality of work. They helped
                      my business grow in digital. High standard and excellent
                      quality of work. They helped my business grow in digital.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="customer-name">
                    <p>A</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “High standard and excellent quality of work. They helped
                      my business grow in digital.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="customer-name">
                    <p>B</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img3} alt="" />
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “High standard and excellent quality of work. They helped
                      my business grow in digital.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="customer-name">
                    <p>C</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “High standard and excellent quality of work. They helped
                      my business grow in digital.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="customer-name">
                    <p>D</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “High standard and excellent quality of work. They helped
                      my business grow in digital.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="customer-name">
                    <p>E</p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img3} alt="" />
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “High standard and excellent quality of work. They helped
                      my business grow in digital.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="customer-name">
                    <p>F</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Seventhpage;
