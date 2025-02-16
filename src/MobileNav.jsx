import React from 'react'

const MobileNav = () => {
  return (
    <>
          <div
        className={`
           font-semibold  sm:space-x-5 flex flex-col justify-end items-center text-white text-xl font-sans`}
      >
        <a href="#About">   
          <div className="container ">About</div>
        </a>
        <a href="#Skills">
          <div className="container ">Skills</div>
        </a>
        <a href="#Projects">
          <div className="container ">Projects</div>
        </a>
        <a href="#Contact">
          <div className="container ">Contact</div> 
        </a>
        <a href="#Contact">
          <div className="container "></div>  
        </a>
      </div>
    </>
  )
}

export default MobileNav