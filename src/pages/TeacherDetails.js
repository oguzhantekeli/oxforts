import React from "react";
import InnerBanner from "../components/InnerBanner";
import TeamDetailsComp from "../components/TeamDetailsComp";
import CourseOneTitle from "../components/CourseOneTitle";
import CourseOneDetails from "../components/CourseOneDetails";
const TeacherDetails = () => {
  return (
    <>
      <InnerBanner title={"Teacher Details"} />
      <TeamDetailsComp />
      <CourseOneTitle />
      <CourseOneDetails />
    </>
  );
};

export default TeacherDetails;
