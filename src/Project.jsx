import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Project = () => {
  return (
    <>
      <div className="flex flex-col items-start text-white md:h-full mx-2 md:mx-20 w-full ">
        <h1 className="duration-300 hover:ease-out hover:scale-125 cursor-pointer p-2 mt-9 md:mt-20 ml-6 md:text-3xl text-2xl font-bold">
          Projects
        </h1>
        <div className=" flex space-x-3 mt-8 md:ml-6 ">
          <span className="duration-300 hover:ease-out hover:scale-90">
            <IoArrowForward color="#f7f7bd" size={24} />
          </span>
          <span className="cursor-pointer ">
            <p className="text-start">
            I have been working on my Major-Project which will be Airbnb-like website using the MERN stack (MongoDB, Express.js, React, and Node.js) involves building a full-stack web application where users can list, search, and book properties. The frontend will be, built with React, provides a dynamic and interactive user experience, including property listings, search filters, user authentication, and a responsive design. The backend will be, developed with Node.js and Express.js, handles API requests, authentication, and business logic, ensuring secure and efficient data flow. I have been using MongoDB as the database, storing user profiles, property details, booking information, and reviews in a flexible, document-based structure.
            </p>
          </span>
        </div>
        <div className=" flex space-x-3 mt-8 md:ml-6 ">
          <span className="duration-300 hover:ease-out hover:scale-90">
            <IoArrowForward color="#f7f7bd" size={24} />
          </span>
          <span className="cursor-pointer ">
            <p className="text-start">
              In this this MERN-based Airbnb clone, users can seamlessly list properties, book stays, and manage reservations, creating a fully functional rental platform. Additionally, a review and rating system allows users to share their experiences, enhancing platform credibility. With a responsive design and a user-friendly interface, this Airbnb-like MERN stack project delivers a complete rental marketplace experience.
            </p>
          </span>
        </div>

      </div>
    </>
  );
};

export default Project;
