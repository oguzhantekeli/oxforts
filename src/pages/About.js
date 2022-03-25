import React from "react";
import InnerBanner from "../components/InnerBanner";
import AboutOne from "../components/AboutOne";
import TeamOne from "../components/TeamOne";
import VideoOne from "../components/VideoOne";
import BrandOne from "../components/BrandOne";
import TestimonialsOne from "../components/TestimonialsOne";
import CtaOne from "../components/CtaOne";
const About = () => {
  return (
    <>
      <InnerBanner title={"About"} />
      <AboutOne />
      <TeamOne />
      <VideoOne />
      <BrandOne />
      <TestimonialsOne />
      <CtaOne />
    </>
  );
};

export default About;
