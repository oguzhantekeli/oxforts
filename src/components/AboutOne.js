import React from "react";

const AboutOne = () => {
  return (
    <>
      <section className="about-one about-one__about-page">
        <img
          src="assets/images/circle-stripe.png"
          className="about-one__circle"
          alt=""
        />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Let’s do study with <br />
              expert teachers
            </h2>
          </div>
          <div className="about-one__img">
            <div className="row">
              <div className="col-lg-6">
                <img src="assets/images/about-2-1.jpg" alt="" />
              </div>
              <div className="col-lg-6">
                <img src="assets/images/about-2-2.jpg" alt="" />
              </div>
            </div>
            <div className="about-one__review">
              <p className="about-one__review-count counter">88750</p>
              <div className="about-one__review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="about-one__review-text">students loved us</p>
            </div>
          </div>
          <p className="about-one__text">
            There are many variations of passages of lorem ipsum available, but
            the majority have
            <br />
            suffered alteration in some form, by injected humour words which
            don't look even slightly <br /> believable. Lorem Ipsn gravida nibh
            vel velit auctor aliquetn auci elit cons.
          </p>
          <a href="./" className="thm-btn about-one__btn">
            Start Learning Now
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
