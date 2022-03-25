import React from "react";

const Header = () => {
  const searchPopup = (e) => {
    e.preventDefault();
    const searchPopup = document.querySelector(".search-popup");
    searchPopup.classList.toggle("active");
  };

  return (
    <>
      <header className="site-header site-header__header-one ">
        <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky original">
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src={require("../images/logo-dark.png")}
                  className="main-logo"
                  width="128"
                  alt="logo"
                />
              </a>
              <div className="header__social">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>

            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/about">About Page</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="/pricing">Pricing Plans</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ'S</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/courses">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/courses">Courses</a>
                    </li>
                    <li>
                      <a href="/coursedetails/123">Course Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/teachers">Teachers</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/teachers">Teachers</a>
                    </li>
                    <li>
                      <a href="/teamdetails/654654">Teachers Details</a>
                    </li>
                    <li>
                      <a href="/becometeacher">Become Teacher</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/blogs">News</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/blogs">News Page</a>
                    </li>
                    <li>
                      <a href="/blogdetails/654">News Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler"
                href="javascript()"
                onClick={(e) => searchPopup(e)}
              >
                <i className="kipso-icon-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky stricked-menu">
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src={require("../images/logo-dark.png")}
                  className="main-logo"
                  width="128"
                  alt="logo"
                />
              </a>
              <div className="header__social">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>

            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/about">About Page</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="/pricing">Pricing Plans</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ'S</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/courses">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/courses">Courses</a>
                    </li>
                    <li>
                      <a href="/coursedetails/123">Course Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/teachers">Teachers</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/teachers">Teachers</a>
                    </li>
                    <li>
                      <a href="/teamdetails/654">Teachers Details</a>
                    </li>
                    <li>
                      <a href="/becometeacher">Become Teacher</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/blogs">News</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/blogs">News Page</a>
                    </li>
                    <li>
                      <a href="/blogdetails/654">News Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler"
                href="javascript()"
                onClick={(e) => searchPopup(e)}
              >
                <i className="kipso-icon-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
