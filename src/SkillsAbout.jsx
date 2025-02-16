import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";

const SkillsAbout = () => {
  return (
    <>
      <div className=" cursor-pointer  text-white flex flex-col justify-evenly md:w-2/3 ml-10 mt-3 md:mt-28 h-[70%]  ">
        <div className="duration-300 hover:ease-out hover:scale-90 bg-zinc-950 rounded-3xl p-2 mr-20 flex items-center  h-32 space-x-4">
          <div></div>
          <span className="duration-300 hover:ease-out hover:scale-90 flex items-center space-x-2 mb-3">
            <FaReact color="#61DAFB" size={80} />
            <IoArrowForward color="#f7f7bd" size={24} />
          </span>
          <p className=" text-start text-xs md:text-sm leading-tight">
            Using ReactJS i got some opportunaities for create single-page application. One of its key features is component-based architecture, which allows me to create reusable UI components, making development more efficient and scalable.
          </p>
        </div>

        <div className="duration-300 hover:ease-out hover:scale-90 bg-zinc-950 rounded-3xl p-2 mr-20 flex items-center  h-32 space-x-4">
          <div></div>
          <span className="duration-300 hover:ease-out hover:scale-90 flex items-center space-x-2 mb-3">
            <SiTailwindcss color="#69cdfa" size={80} />
            <IoArrowForward color="#f7f7bd" size={24} />
          </span>
          <p className="text-start text-xs md:text-sm leading-tight">
            Whenever i used Talwind CSS for create my styles it saves my time it allows me to apply pre-defined classes directly in HTML without writing custom CSS. And making it easy to create layouts that adapt to different screen sizes using built-in breakpoints.
          </p>
        </div>

        <div className="duration-300 hover:ease-out hover:scale-90 bg-zinc-950 rounded-3xl p-2 mr-20 flex items-center h-32 space-x-4">
          <div></div>
          <span className="duration-300 hover:ease-out hover:scale-90 flex items-center space-x-2 mb-3">
            <SiGithub color="FFFFFF" size={80} />
            <IoArrowForward color="#f7f7bd" size={24} />
          </span>
          <p className="text-start text-xs md:text-sm leading-tight">
          It has one of key features is repository management, which allows me to store, track, and manage code efficiently. 
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillsAbout;
