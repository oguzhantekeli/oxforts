import React from "react";
import InnerBanner from "../components/InnerBanner";
import PricingOne from "../components/PricingOne";
import CtaOne from "../components/CtaOne";
const Pricing = () => {
  return (
    <>
      <InnerBanner title={"Pricing"} />
      <PricingOne />
      <CtaOne />
    </>
  );
};

export default Pricing;
