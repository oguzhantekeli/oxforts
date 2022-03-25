import React from "react";
import InnerBanner from "../components/InnerBanner";
import BecomeTeacherComp from "../components/BecomeTeacherComp";
import TeamOne from "../components/TeamOne";
import CtaOne from "../components/CtaOne";
const BecomeTeacher = () => {
  return (
    <>
      <InnerBanner title={"Become Teacher"} />
      <BecomeTeacherComp />
      <TeamOne />
      <CtaOne />
    </>
  );
};

export default BecomeTeacher;
