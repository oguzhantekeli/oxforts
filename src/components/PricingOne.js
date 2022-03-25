import React from "react";

const PricingOne = () => {
  return (
    <>
      <section className="pricing-one pricing-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <h2 className="pricing-one__price">$20.00 </h2>
                  <p className="pricing-one__name">basic pack</p>
                  <ul className="pricing-one__list list-unstyled">
                    <li>3 Full Courses</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>9 Days Time</li>
                  </ul>
                  <a href="./" className="thm-btn pricing-one__btn">
                    Choose Plan
                  </a>
                  <p className="pricing-one__tag-line">No hidden charges!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <h2 className="pricing-one__price">$30.00 </h2>
                  <p className="pricing-one__name">medium pack</p>
                  <ul className="pricing-one__list list-unstyled">
                    <li>3 Full Courses</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>9 Days Time</li>
                  </ul>
                  <a href="./" className="thm-btn pricing-one__btn">
                    Choose Plan
                  </a>
                  <p className="pricing-one__tag-line">No hidden charges!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <h2 className="pricing-one__price">$40.00 </h2>
                  <p className="pricing-one__name">premium pack</p>
                  <ul className="pricing-one__list list-unstyled">
                    <li>3 Full Courses</li>
                    <li>Lifetime free support</li>
                    <li>Upgrate options</li>
                    <li>9 Days Time</li>
                  </ul>
                  <a href="./" className="thm-btn pricing-one__btn">
                    Choose Plan
                  </a>
                  <p className="pricing-one__tag-line">No hidden charges!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingOne;
