import React from "react";
import {
  footer_1_1,
  footer_1_2,
  footer_1_3,
  footer_1_4,
  footer_1_5,
  footer_1_6,
} from "../images/images";
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Courses</h2>
                  <ul className="list-unstyled footer-widget__course-list">
                    <li>
                      <h2>
                        <a href="course-details.html">
                          Introduction Web Design
                        </a>
                      </h2>
                      <p>Mike Hardson</p>
                    </li>
                    <li>
                      <h2>
                        <a href="course-details.html">
                          Learning MBA Management
                        </a>
                      </h2>
                      <p>Jessica Brown</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="./">About</a>
                      </li>
                      <li>
                        <a href="./">Overview</a>
                      </li>
                      <li>
                        <a href="./">Teachers</a>
                      </li>
                      <li>
                        <a href="./">Join Us</a>
                      </li>
                      <li>
                        <a href="./">Our News</a>
                      </li>
                    </ul>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="./">Help </a>
                      </li>
                      <li>
                        <a href="./">Contact</a>
                      </li>
                      <li>
                        <a href="./">Register Now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__gallery">
                  <h2 className="footer-widget__title">Gallery</h2>
                  <ul className="list-unstyled footer-widget__gallery-list">
                    <li>
                      <a href="./">
                        <img src={footer_1_1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="./">
                        <img src={footer_1_2} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="./">
                        <img src={footer_1_3} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="./">
                        <img src={footer_1_4} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="./">
                        <img src={footer_1_5} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="./">
                        <img src={footer_1_6} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                    Phasellus vehic sagittis euismod.
                  </p>
                  <div className="footer-widget__btn-block">
                    <a href="./" className="thm-btn">
                      Contact
                    </a>
                    <a href="./" className="thm-btn">
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">
              &copy; Copyright 2019 by <a href="./">Layerdrops.com</a>
            </p>
            <div className="site-footer__social">
              <a href="#" className="scroll-to-target site-footer__scroll-top">
                <i className="kipso-icon-top-arrow"></i>
              </a>
              <a href="./">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="./">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="./">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="./">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
