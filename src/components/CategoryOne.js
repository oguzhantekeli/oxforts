import React from "react";

const CategoryOne = () => {
  return (
    <>
      <section className="thm-gray-bg course-category-one">
        <div className="container-fluid text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Browse online <br />
              course categories
            </h2>
          </div>
          <div className="course-category-one__carousel owl-carousel owl-theme">
            <div className="item">
              <div className="course-category-one__single color-1">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-desktop"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">IT & Software</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-2">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-web-programming"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-3">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-music-player"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Music</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-4">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-camera"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Photography</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-5">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-targeting"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Marketing</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-6">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-health"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Health & Fitness</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-1">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-desktop"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">IT & Software</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-2">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-web-programming"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-3">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-music-player"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Music</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-4">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-camera"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="./">Photography</a>
                </h3>
              </div>
            </div>
          </div>

          <a href="./" className="thm-btn">
            View All Categories
          </a>
        </div>
      </section>
    </>
  );
};

export default CategoryOne;
