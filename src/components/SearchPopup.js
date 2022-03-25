import React from "react";

const SearchPopup = () => {
  return (
    <>
      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
