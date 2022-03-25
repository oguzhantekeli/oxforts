import React from "react";
import {
  gallery_1_1,
  gallery_1_2,
  gallery_1_3,
  gallery_1_4,
  gallery_1_5,
  gallery_1_6,
  gallery_1_7,
  gallery_1_8,
  gallery_1_9,
} from "../images/images";
const GalleryOne = () => {
  return (
    <>
      <section className="gallery-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_1} alt="" />
                <a href={gallery_1_1} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_2} alt="" />
                <a href={gallery_1_2} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_3} alt="" />
                <a href={gallery_1_3} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_4} alt="" />
                <a href={gallery_1_4} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_5} alt="" />
                <a href={gallery_1_5} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_6} alt="" />
                <a href={gallery_1_6} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_7} alt="" />
                <a href={gallery_1_7} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_8} alt="" />
                <a href={gallery_1_8} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src={gallery_1_9} alt="" />
                <a href={gallery_1_9} className="gallery-one__popup img-popup">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryOne;
