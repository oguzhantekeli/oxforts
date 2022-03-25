import React from "react";
import { brand_1_1 } from "../images/images";

const BrandTwo = () => {
  return (
    <>
      <section className="brand-two ">
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">Our company & partners</h2>
          </div>
          <div className="brand-one__carousel owl-carousel owl-theme">
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
            <div className="item">
              <img src={brand_1_1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandTwo;
