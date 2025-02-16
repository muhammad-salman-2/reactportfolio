import React from "react";
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql, SiRedux, SiTailwindcss } from "react-icons/si";
const SkillIcons = () => {
  return (
    <>
      <div className=" text-white flex flex-col justify-center md:items-start md:-ml-24  md:w-2/3   md:space-x-40">
        <h1 className="duration-300 hover:ease-out hover:scale-90 cursor-pointer font-bold text-2xl md:text-3xl mr-80  md:flex p-4 md:ml-52  md:mt-4 w-auto md:w-2/3 ">Skills</h1>
        <div className="w-96  md:mb-10 flex-col">
          <div className=" cursor-pointer flex justify-around content-between md:mt-3 w-full flex-wrap md:justify-between md:h-96 h-auto md:w-auto">
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <FaHtml5 color="#E34F26" size={80} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <FaCss3 color="#1572b6" size={80} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <FaBootstrap color="#8712fb" size={80} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <SiTailwindcss color="#69cdfa" size={80} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <FaJs color="#F7DF1E" size={80} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <SiMongodb color="#47A248" size={87} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <SiMysql color="#42759c" size={80} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <SiRedux color="#523c80" size={80} />
            </span>
            <span className="duration-300 hover:ease-out hover:scale-125 md:p-3 p-6 md:m-2 bg-zinc-950 flex-wrap items-center rounded-2xl">
              <FaReact color="#61DAFB" size={80} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillIcons;
