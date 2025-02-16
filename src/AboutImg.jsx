import React from "react";

const AboutImg = () => {
  return (
    <div className=" text-white flex flex-col justify-around content-center items-center w-2/3 md:space-x-40">
      <h1 className="cursor-pointer font-bold text-2xl md:text-3xl duration-300 hover:ease-out hover:scale-125">About</h1>
      <div className="md:w-[70%] pl-8">
        <img
          className="duration-300 hover:ease-out hover:scale-90 cursor-pointer rounded-full mix-blend-difference hover:mix-blend-soft-light"
          src="https://i.pinimg.com/originals/b3/90/7f/b3907f4bb67898c08b6fa9f7193315a5.jpg"
          alt="aboit image"
        />
      </div>
    </div>
  );
};

export default AboutImg;
