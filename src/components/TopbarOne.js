import React from "react";

const TopbarOne = () => {
  return (
    <>
      <div className="topbar-one">
        <div className="container">
          <div className="topbar-one__left">
            <a href="./">needhelp@kipso.com</a>
            <a href="./">444 888 0000</a>
          </div>
          <div className="topbar-one__right">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopbarOne;
