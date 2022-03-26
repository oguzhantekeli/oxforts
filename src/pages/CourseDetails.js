import React from "react";
import InnerBanner from "../components/InnerBanner";
import CourseDetailsComp from "../components/CourseDetailsComp";
const CourseDetails = () => {
  return (
    <>
      <InnerBanner title={"Course Details"} />
      <CourseDetailsComp />
    </>
  );
};

export default CourseDetails;
