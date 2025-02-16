import React from "react";
import { IoArrowForward } from "react-icons/io5";
const AboutInfo = () => {
  return (
    <>
      <div className="w-full  mt-14 md:mt-9 cursor-pointer">
        <div className="duration-300 hover:ease-out hover:scale-90 text-white flex md:pt-7 py-4  gap-2 md:gap-3 ">
          <IoArrowForward size={30} className="duration-300 hover:ease-out hover:scale-125 mt-1.5" />
          <div className="md:w-4/6 w-full ">
            <h1 className="duration-300 hover:ease-out hover:scale-90 text-start leading-normal font-bold md:font-semibold text-xl md:text-2xl md:mb-3 ">
              Frontend Development
            </h1>
            <p className=" text-xs md:text-sm leading-tight text-start ">
              In Frontend Development for creating the visual and interactive elements of a website using these technologies like HTML, CSS, JavaScript, and frameworks like Bootstrap and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className=" duration-300 hover:ease-out hover:scale-90 text-white flex md:pt-7 py-4  gap-2 md:gap-3">
          <IoArrowForward size={30} className="duration-300 hover:ease-out hover:scale-125 mt-1.5" />
          <div className="md:w-4/6 w-full">
            <h1 className="duration-300 hover:ease-out hover:scale-90 text-start leading-normal font-bold md:font-semibold text-xl md:text-2xl md:mb-3 ">
              Backend Development
            </h1>
            <p className="text-xs md:text-sm leading-tight text-start ">
            In Backend Development for building and maintaining the server-side logic of web applications using technologies like Node.js and Express.js.  Node.js, a JavaScript runtime, allows developers to run JavaScript on the server, enabling efficient and scalable backend development.
            </p>
          </div>
        </div>
        <div className="duration-300 hover:ease-out hover:scale-90 text-white flex md:pt-7 py-4  gap-2 md:gap-3">
          <IoArrowForward size={30} className="duration-300 hover:ease-out hover:scale-125 mt-1.5" />
          <div className="md:w-4/6 w-full">
            <h1 className="duration-300 hover:ease-out hover:scale-90 text-start leading-normal font-bold md:font-semibold text-xl md:text-2xl md:mb-3 ">
              Database 
            </h1>
            <p className="text-xs md:text-sm leading-tight text-start">
              I have been using MongoDB for for managing and storing data efficiently in modern web applications. MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it highly scalable and suitable for handling large amounts of unstructured data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
