import React from "react";
import { video_1_1, scratch_1_1 } from "../images/images";
const VideoOne = () => {
  return (
    <>
      <section className="video-one">
        <div className="container">
          <img src={scratch_1_1} className="video-one__scratch" alt="" />
          <div className="row">
            <div className="col-lg-6 d-flex align-items-end">
              <div className="video-one__content">
                <h2 className="video-one__title">
                  Take a tour dolor <br />
                  sit amet, consect <br />
                  etur elit
                </h2>
                <a href="./" className="thm-btn video-one__btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-one__img">
                <img src={video_1_1} alt="" />
                <a href="#" className="video-one__popup">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoOne;
