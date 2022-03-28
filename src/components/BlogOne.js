import React, { useEffect } from "react";
import {
  blog_1_1,
  blog_1_2,
  blog_1_3,
  blog_1_4,
  blog_1_5,
  blog_1_6,
} from "../images/images";
import {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} from "../services/postsApi";

const BlogOne = () => {
  const {
    data: posts,
    isError: isErrorPosts,
    isSuccess: isSuccessPosts,
  } = useGetPostsQuery();
  const {
    data: post,
    isError: isErrorPost,
    isSuccess: isSuccessPost,
  } = useGetPostQuery(11);

  useEffect(() => {
    posts && post && (isSuccessPost || isSuccessPosts)
      ? console.log(posts)
      : console.log("data ready?", isErrorPosts);
    posts && post && (isSuccessPost || isSuccessPosts)
      ? console.log(post)
      : console.log("data ready?", isErrorPost);
  }, [posts, post, isErrorPost, isErrorPosts, isSuccessPost, isSuccessPosts]);
  const [addPost] = useAddPostMutation();

  const newposta = {
    id: 123123,
    body: "neque voluptates ut commodi qui incidunt\nut animi commodi",
    title: "new 123123 title",
    userId: 2123,
  };
  const createNewPost = async (postData) => {
    await addPost(newposta);
  };

  return (
    <>
      {/* <button type="button" onClick={() => createNewPost()}>
        Add New
      </button> */}
      <section className="blog-one blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src={blog_1_1} alt="" />
                  <a className="blog-one__plus" href="news-details.html">
                    <i className="kipso-icon-plus-symbol"></i>
                  </a>
                </div>
                <div className="blog-one__content text-center">
                  <div className="blog-one__meta">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted On Jan 19"
                      href="#"
                    >
                      <i className="fa fa-calendar-alt"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No Comments"
                      href="#"
                    >
                      <i className="fa fa-comments"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted By Admin"
                      href="#"
                    >
                      <i className="fa fa-user"></i>
                    </a>
                  </div>
                  <h2 className="blog-one__title">
                    <a href="news-details.html">
                      Summer high school journalism camp
                    </a>
                  </h2>
                  <p className="blog-one__text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit amet finibus eros.
                  </p>
                  <a href="news-details.html" className="blog-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src={blog_1_2} alt="" />
                  <a className="blog-one__plus" href="news-details.html">
                    <i className="kipso-icon-plus-symbol"></i>
                  </a>
                </div>
                <div className="blog-one__content text-center">
                  <div className="blog-one__meta">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted On Jan 19"
                      href="#"
                    >
                      <i className="fa fa-calendar-alt"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No Comments"
                      href="#"
                    >
                      <i className="fa fa-comments"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted By Admin"
                      href="#"
                    >
                      <i className="fa fa-user"></i>
                    </a>
                  </div>
                  <h2 className="blog-one__title">
                    <a href="news-details.html">
                      Get a tips to develop a quality education
                    </a>
                  </h2>
                  <p className="blog-one__text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit amet finibus eros.
                  </p>
                  <a href="news-details.html" className="blog-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src={blog_1_3} alt="" />
                  <a className="blog-one__plus" href="news-details.html">
                    <i className="kipso-icon-plus-symbol"></i>
                  </a>
                </div>
                <div className="blog-one__content text-center">
                  <div className="blog-one__meta">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted On Jan 19"
                      href="#"
                    >
                      <i className="fa fa-calendar-alt"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No Comments"
                      href="#"
                    >
                      <i className="fa fa-comments"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted By Admin"
                      href="#"
                    >
                      <i className="fa fa-user"></i>
                    </a>
                  </div>
                  <h2 className="blog-one__title">
                    <a href="news-details.html">
                      Learn variety of programs and courses
                    </a>
                  </h2>
                  <p className="blog-one__text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit amet finibus eros.
                  </p>
                  <a href="news-details.html" className="blog-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src={blog_1_4} alt="" />
                  <a className="blog-one__plus" href="news-details.html">
                    <i className="kipso-icon-plus-symbol"></i>
                  </a>
                </div>
                <div className="blog-one__content text-center">
                  <div className="blog-one__meta">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted On Jan 19"
                      href="#"
                    >
                      <i className="fa fa-calendar-alt"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No Comments"
                      href="#"
                    >
                      <i className="fa fa-comments"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted By Admin"
                      href="#"
                    >
                      <i className="fa fa-user"></i>
                    </a>
                  </div>
                  <h2 className="blog-one__title">
                    <a href="news-details.html">
                      English lectures in french language courses
                    </a>
                  </h2>
                  <p className="blog-one__text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit amet finibus eros.
                  </p>
                  <a href="news-details.html" className="blog-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src={blog_1_5} alt="" />
                  <a className="blog-one__plus" href="news-details.html">
                    <i className="kipso-icon-plus-symbol"></i>
                  </a>
                </div>
                <div className="blog-one__content text-center">
                  <div className="blog-one__meta">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted On Jan 19"
                      href="#"
                    >
                      <i className="fa fa-calendar-alt"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No Comments"
                      href="#"
                    >
                      <i className="fa fa-comments"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted By Admin"
                      href="#"
                    >
                      <i className="fa fa-user"></i>
                    </a>
                  </div>
                  <h2 className="blog-one__title">
                    <a href="news-details.html">
                      Subject that fits your busy life styles
                    </a>
                  </h2>
                  <p className="blog-one__text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit amet finibus eros.
                  </p>
                  <a href="news-details.html" className="blog-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src={blog_1_6} alt="" />
                  <a className="blog-one__plus" href="news-details.html">
                    <i className="kipso-icon-plus-symbol"></i>
                  </a>
                </div>
                <div className="blog-one__content text-center">
                  <div className="blog-one__meta">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted On Jan 19"
                      href="#"
                    >
                      <i className="fa fa-calendar-alt"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No Comments"
                      href="#"
                    >
                      <i className="fa fa-comments"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Posted By Admin"
                      href="#"
                    >
                      <i className="fa fa-user"></i>
                    </a>
                  </div>
                  <h2 className="blog-one__title">
                    <a href="news-details.html">
                      Are you ready to become a best student
                    </a>
                  </h2>
                  <p className="blog-one__text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit amet finibus eros.
                  </p>
                  <a href="news-details.html" className="blog-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="post-pagination">
            <a href="#">
              <i className="fa fa-angle-double-left"></i>{" "}
            </a>
            <a className="active" href="#">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">
              <i className="fa fa-angle-double-right"></i>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogOne;
