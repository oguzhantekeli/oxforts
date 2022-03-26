import React from "react";
import InnerBanner from "../components/InnerBanner";
import ContactOne from "../components/ContactOne";
import ContactInfoOne from "../components/ContactInfoOne";
const Contact = () => {
  return (
    <>
      <InnerBanner title={"Contact"} />
      <ContactInfoOne />
      <ContactOne />
    </>
  );
};

export default Contact;
