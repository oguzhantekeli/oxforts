import React from "react";
import InnerBanner from "../components/InnerBanner";
import BlogDetailsComp from "../components/BlogDetailsComp";
const BlogDetails = () => {
  return (
    <>
      <InnerBanner title={"Blog Details"} />
      <BlogDetailsComp />
    </>
  );
};

export default BlogDetails;
