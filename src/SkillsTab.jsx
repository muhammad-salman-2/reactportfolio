import React from "react";
import SkillIcons from "./SkillIcons";
import SkillsAbout from "./SkillsAbout";
const SkillsTab = () => {
  return (
    <>
      <div id="Skills" className="flex md:flex-row items-center flex-col  md:h-screen  bg-black bg-opacity-30 rounded-3xl">
        <SkillIcons />
        <SkillsAbout />
      </div>
    </>
  );
};

export default SkillsTab;
