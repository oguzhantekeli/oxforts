import React from "react";

const ContactOne = () => {
  return (
    <>
      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Get in touch <br />
            with us
          </h2>
          <form action="#" className="contact-one__form">
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Write Message"></textarea>
                <div className="text-center">
                  <button type="submit" className="contact-one__btn thm-btn">
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactOne;
