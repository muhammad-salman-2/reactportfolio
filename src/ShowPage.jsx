import React from "react";
import SectionAbout from "./SectionAbout";
import SectionSkills from "./SectionSkills";
import HomeTab from "./HomeTab";
import SectionProject from "./SectionProject";
import SectionFooter from "./SectionFooter";
import NavTab from "./NavTab";


const ShowPage = () => {
  return (
    <div className="">
      <NavTab />
      <HomeTab />
      <SectionAbout />
      <SectionSkills />
      <SectionProject />
      <SectionFooter />
    </div>
  );
};

export default ShowPage;
