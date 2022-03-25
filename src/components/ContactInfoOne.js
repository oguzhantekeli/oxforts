import React from "react";

const ContactInfoOne = () => {
  return (
    <>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="contact-info-one__single wow fadeInDown"
                data-wow-duration="1500ms"
              >
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-manager"></i>
                </div>
                <h2 className="contact-info-one__title">About Us </h2>
                <p className="contact-info-one__text">
                  Lorem ipsum is simply free text <br /> available in the market
                  to use <br />
                  deliver satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="contact-info-one__single wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder"></i>
                </div>
                <h2 className="contact-info-one__title">Our Address</h2>
                <p className="contact-info-one__text">
                  855 Road Broklyn Street, <br />
                  600 New York, United States of <br /> America
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="contact-info-one__single wow fadeInDown"
                data-wow-duration="1500ms"
              >
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h2 className="contact-info-one__title">Contact Info</h2>
                <p className="contact-info-one__text">
                  needhelp@kipso.com <br />
                  444 888 0000 <br /> &nbsp;{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfoOne;
