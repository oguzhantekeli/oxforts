import React from "react";
import {
  course_1_1,
  team_1_1,
  course_1_2,
  team_1_2,
  course_1_3,
  team_1_3,
  course_1_4,
  team_1_4,
  course_1_5,
  team_1_5,
  course_1_6,
  team_1_6,
} from "../images/images";
const CourseOneDetails = () => {
  return (
    <>
      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel owl-carousel owl-theme">
            <div className="item">
              <div className="course-one__single color-1">
                <div className="course-one__image">
                  <img src={course_1_1} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    development
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_1} alt="" />
                    by <a href="teacher-details.html">Lou Guerrero</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">New react bootcamp</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-2">
                <div className="course-one__image">
                  <img src={course_1_2} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    It & Software
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_2} alt="" />
                    by <a href="teacher-details.html">Cora Diaz</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">Improve editing skills</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-3">
                <div className="course-one__image">
                  <img src={course_1_3} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    marketing
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_3} alt="" />
                    by <a href="teacher-details.html">Ruth Becker</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">Marketing strategies</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-4">
                <div className="course-one__image">
                  <img src={course_1_4} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    Photography
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_4} alt="" />
                    by <a href="teacher-details.html">Ernest Rodriquez</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">Basics of photography</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-5">
                <div className="course-one__image">
                  <img src={course_1_5} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    marketing
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_5} alt="" />
                    by <a href="teacher-details.html">Isabella Stanley</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">Affiliate bootcamp</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-6">
                <div className="course-one__image">
                  <img src={course_1_6} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    Health & Fitness
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_6} alt="" />
                    by <a href="teacher-details.html">Katherine Collins</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">Healthy workout tips </a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-1">
                <div className="course-one__image">
                  <img src={course_1_1} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    development
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_1} alt="" />
                    by <a href="teacher-details.html">Lou Guerrero</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">New react bootcamp</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-2">
                <div className="course-one__image">
                  <img src={course_1_2} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    It & Software
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_2} alt="" />
                    by <a href="teacher-details.html">Cora Diaz</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">Improve editing skills</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-3">
                <div className="course-one__image">
                  <img src={course_1_3} alt="" />
                  <i className="far fa-heart"></i>
                </div>
                <div className="course-one__content">
                  <a href="./" className="course-one__category">
                    marketing
                  </a>
                  <div className="course-one__admin">
                    <img src={team_1_3} alt="" />
                    by <a href="teacher-details.html">Ruth Becker</a>
                  </div>
                  <h2 className="course-one__title">
                    <a href="course-details.html">Marketing strategies</a>
                  </h2>

                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="course-one__count">4.8</span>
                    <span className="course-one__stars-count">250</span>
                  </div>
                  <div className="course-one__meta">
                    <a href="course-details.html">
                      <i className="far fa-clock"></i> 10 Hours
                    </a>
                    <a href="course-details.html">
                      <i className="far fa-folder-open"></i> 6 Lectures
                    </a>
                    <a href="course-details.html">$18</a>
                  </div>
                  <a href="./" className="course-one__link">
                    See Preview
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

export default CourseOneDetails;
