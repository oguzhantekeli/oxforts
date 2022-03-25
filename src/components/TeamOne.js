import React from "react";
import { team_1_1, team_1_2, team_1_3, team_1_4 } from "../images/images";
const TeamOne = () => {
  return (
    <>
      <section className="team-one  ">
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Meet the best <br />
              teachers
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src={team_1_1} alt="" />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="team-details.html">Adelaide Hunter</a>
                  </h2>

                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
                  <a href="./">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src={team_1_2} alt="" />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="team-details.html">Christina Newman</a>
                  </h2>

                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
                  <a href="./">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src={team_1_3} alt="" />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="team-details.html">Gilbert Daniels</a>
                  </h2>

                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
                  <a href="./">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src={team_1_4} alt="" />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="team-details.html">Austin Caldwell</a>
                  </h2>

                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
                  <a href="./">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="./">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamOne;
