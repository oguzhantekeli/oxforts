import React from "react";

const InnerBanner = ({ title }) => {
  return (
    <>
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="./">Home</a>
            </li>
            <li className="active">
              <a href="./">{title}</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">{title}</h2>
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
