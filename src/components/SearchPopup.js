import React, { useState } from "react";

const SearchPopup = () => {
  const closePopup = () => {
    const searchPopup = document.querySelector(".search-popup");
    searchPopup.classList.toggle("active");
  };
  const [searchTerm, setSearchTerm] = useState({ term: "" });
  const { term } = searchTerm;

  const onChange = (e) => {
    setSearchTerm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const submitTerm = { term };
    console.log(submitTerm);
    setSearchTerm({ term: "" });
    closePopup();
  };
  return (
    <>
      <div className="search-popup">
        <div
          className="search-popup__overlay custom-cursor__overlay"
          onClick={closePopup}
        >
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="search-popup__inner">
          <form onSubmit={onSubmit} className="search-popup__form">
            <input
              type="text"
              name="term"
              placeholder="Ara.."
              onChange={onChange}
              value={term}
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
