import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GalleryOne = () => {
  //todo: get image data from store...
  const images = [
    "assets/images/gallery-1-1.jpg",
    "assets/images/gallery-1-2.jpg",
    "assets/images/gallery-1-3.jpg",
    "assets/images/gallery-1-4.jpg",
    "assets/images/gallery-1-5.jpg",
    "assets/images/gallery-1-6.jpg",
    "assets/images/gallery-1-7.jpg",
    "assets/images/gallery-1-8.jpg",
    "assets/images/gallery-1-9.jpg",
  ];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="gallery-one">
        <div className="container">
          <div className="row">
            {images.map((item, idx) => {
              return (
                <div
                  className="col-lg-4 col-md-6"
                  key={idx}
                  onClick={() => {
                    setPhotoIndex(idx);
                    setIsOpen(true);
                    console.log("open:", isOpen, idx);
                  }}
                >
                  <div className="gallery-one__single">
                    <img src={item} alt="" />
                    <span className="gallery-one__popup img-popup">
                      <i className="kipso-icon-plus-symbol"></i>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setIsOpen(false);
            setPhotoIndex(0);
            console.log("close:", isOpen);
          }}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
            console.log("prev:", photoIndex);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length);
            console.log("next:", photoIndex);
          }}
        />
      )}
    </>
  );
};

export default GalleryOne;
