import React from "react";

const Home = () => {
  return (
    <>
      <div className="  text-white md:p-10 pl-20 md:pl-20 flex w-full  jutify-between  md:items-start mt-5">
        <div className=" w-full md:w-1/2 py-11 ">
          <h1 className="motion-duration-[6s]  motion-preset-typewriter-[25] motion-loop-[2] hover:motion-preset-bounce cursor-pointer flex leading-normal tracking-tight font-bold text-2xl sm:text-3xl md:text-4xl">
            Hi, It's Muhammad Salman
          </h1>
          <p className="hover:font-light font-medium motion-translate-x-in-75 motion-duration-[2s]  cursor-pointer  text-left tracking-tighter">
            I am a Full Stack Developer Best Of Frontend Developement!
          </p>
          <a href="#Contact">
            <button className="hover:scale-x-125 motion-translate-x-in-75 motion-duration-[2s] motion-ease-spring-smooth hover:scale-y-125 duration-300 ease-in mt-3 p-2 flex justify-center w-28 rounded-full bg-sky-700 hover:bg-sky-800">
              Contact Me
            </button> 
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;


