import React from "react";
import {
  slider_1_scratch,
  slider_1_person_1,
  slider_1_person_2,
} from "../images/images";
const BannerWrapper = () => {
  return (
    <>
      <div className="banner-wrapper">
        <section className="banner-one banner-carousel__one no-dots owl-theme owl-carousel">
          <div className="banner-one__slide banner-one__slide-one">
            <div className="container">
              <div className="banner-one__bubble-1"></div>
              <div className="banner-one__bubble-2"></div>
              <div className="banner-one__bubble-3"></div>
              <img
                src={slider_1_scratch}
                alt=""
                className="banner-one__scratch"
              />
              <img
                src={slider_1_person_1}
                className="banner-one__person"
                alt=""
              />
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    We Can 123123 <br />
                    Teach You
                  </h3>
                  <p className="banner-one__tag-line">
                    are you ready to learn?
                  </p>
                  <a href="./" className="thm-btn banner-one__btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-one__slide banner-one__slide-two">
            <div className="container">
              <div className="banner-one__bubble-1"></div>
              <div className="banner-one__bubble-2"></div>
              <div className="banner-one__bubble-3"></div>
              <img
                src={slider_1_scratch}
                alt=""
                className="banner-one__scratch"
              />
              <img
                src={slider_1_person_2}
                className="banner-one__person"
                alt=""
              />
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    We Can <br />
                    Teach You
                  </h3>
                  <p className="banner-one__tag-line">
                    are you ready to learn?
                  </p>
                  <a href="./" className="thm-btn banner-one__btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="banner-carousel-btn">
          <a href="./" className="banner-carousel-btn__left-btn">
            <i className="kipso-icon-left-arrow"></i>
          </a>
          <a href="./" className="banner-carousel-btn__right-btn">
            <i className="kipso-icon-right-arrow"></i>
          </a>
        </div>
        <div className="banner-one__cta">
          <div className="banner-one__cta-icon">
            <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
          </div>
          <div className="banner-one__cta-title">
            <h3 className="banner-one__cta-text">
              <a href="./">Read how we encourage our students to learn</a>
            </h3>
          </div>
          <div className="banner-one__cta-link">
            <a href="./">
              <i className="kipso-icon-right-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWrapper;
