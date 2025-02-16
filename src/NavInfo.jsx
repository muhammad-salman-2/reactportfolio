import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import MobileNav from "./MobileNav";

const NavInfo = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [mobMenu, setMobMenu] = useState(false);
  return (
    <> 
    {mobMenu && (
        <div className="md:hidden absolute top-20">
        <MobileNav />
      </div>
    )}


      <div
        className={` ${menu?"block":"hidden"}
          md:flex-row font-semibold hidden  sm:space-x-6 md:space-x-20  md:flex flex-col justify-end items-center text-white text-xl font-sans`}
      >
        <a href="#About">   
          <div className=" duration-300 hover:ease-out hover:scale-125 ">About</div>
        </a>
        <a href="#Skills">
          <div className="duration-300 hover:ease-out hover:scale-125 ">Skills</div>
        </a>
        <a href="#Projects">
          <div className="duration-300 hover:ease-out hover:scale-125 ">Projects</div>
        </a>
        <a href="#Contact">
          <div className="duration-300 hover:ease-out hover:scale-125 ">Contact</div> 
        </a>
        <a href="#Contact">
          <div className="duration-300 hover:ease-out hover:scale-125 "></div>  
        </a>
      </div>
       

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden  absolute right-16 top-16 transition-all duration-300 text-white"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
            setMobMenu(!mobMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute  right-16 top-14 transition-all duration-300 text-white"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
            setMobMenu(!mobMenu);
          }}
        />
      )}
    </>
  );
};

export default NavInfo;
