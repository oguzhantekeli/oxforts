import React from "react";
import { cta_bg_1_1 } from "../images/images";
const CtaOne = () => {
  return (
    <>
      <section
        className="cta-one cta-one__home-one"
        style={{ backgroundImage: `url(${cta_bg_1_1})` }}
      >
        <div className="container">
          <h2 className="cta-one__title">
            Kipso one & only <br />
            mission is to extend <br />
            your knowledge base
          </h2>
          <div className="cta-one__btn-block">
            <a href="./" className="thm-btn cta-one__btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaOne;
