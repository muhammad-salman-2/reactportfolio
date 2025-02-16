import React from "react";
import AboutInfo from "./AboutInfo";
import AboutImg from "./AboutImg";

const AboutTab = () => {
  return (
    <>
      <div className="flex h-auto  md:h-screen space-x-28 md:space-x-64 bg-black bg-opacity-30 rounded-3xl">
        <AboutImg />
        <AboutInfo />
      </div>
    </>
  );
};

export default AboutTab;
