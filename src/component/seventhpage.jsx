import React, { useEffect, useRef } from "react";
import "./seventhpage.css";
import Swiper from "swiper";

import img1 from "../assets/customer/Kseniia Eliseeva- mobitopia.jpg";
import img2 from "../assets/customer/Innermobi logo.jpg";
import img3 from "../assets/customer/thinkmobilegroup - alexendra.jpg";
import img4 from "../assets/customer/accesstrade-logo.jpg";

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
                  <div className="customer-name">
                    <p className="text-center">
                      Kseniia Eliseeva, Account Manager{" "}
                    </p>
                    <p className="text-center my-font-weight-bold">Mobitopia </p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “Have been working with Adshustle since November. Have
                      good communication with AM, everything solves very quick,
                      we find many mutual points to boost our profit from both
                      of sides. Appreciate this partner a lot. ”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img2} alt="client" />
                  </div>
                  <div className="customer-name">
                    <p className="text-center">
                      Jennifer wang, Account Manager
                    </p>
                    <p className="text-center my-font-weight-bold">Innermobi </p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “It's a pleasure to work with Adshustle who is really
                      professional and has good performance for our campaigns”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img3} alt="client" />
                  </div>
                  <div className="customer-name">
                    <p className="text-center">Dung Tran, Account Manager</p>
                    <p className="text-center my-font-weight-bold">Accesstrade</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “We are thankful that Adshulte went out of their way each
                      month to provide extra their inventory to boost growth. We
                      appreciate them and we are looking forward to working with
                      them for many years.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img4} alt="client" />
                  </div>
                  <div className="customer-name">
                    <p className="text-center">
                      Alexandra Holtti, Account Manager
                    </p>
                    <p className="text-center my-font-weight-bold">Thinkmobilegroup</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “Have been working with Adshustle since November. Have
                      good communication with AM, everything solves very quick,
                      we find many mutual points to boost our profit from both
                      of sides. Appreciate this partner a lot. ”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
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
