import React from "react";
import { FaLinkedinIn, FaGithub,FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const FooterSocialMedia = () => {
  return (
    <>
      <div className="text-white flex flex-col space-y-3 md:pr-20 content-center items-start ">
        <div className="duration-300 hover:ease-out hover:scale-90 flex space-x-3 cursor-pointer">
          <SiGmail size={20} />
          <a className=" text-xs md:text-lg" href="mailto:connectwithsalman@gmail.com">connectwithsalman@gmail.com</a>
        </div>
        <div className="duration-300 hover:ease-out hover:scale-90 flex space-x-3 cursor-pointer">
          <FaLinkedinIn size={22} />
          <a className=" text-xs md:text-lg" href="https://linkedin.com/in/salman9official-">https://linkedin.com/in/salman9official-</a>
        </div>
        <div className="duration-300 hover:ease-out hover:scale-90 flex space-x-3 cursor-pointer w-full">
          <FaGithub size={25} />
          <p className=" text-xs md:text-lg md: pr-24"><a className=" text-xs md:text-lg" href="https://github.com/muhammad-salman-2">https://github.com/muhammad-salman-2</a></p>
        </div>
      </div>
    </>
  );
};

export default FooterSocialMedia;
