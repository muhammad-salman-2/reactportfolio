import React from 'react'
import {FaPhone } from "react-icons/fa";

const FooterFirst = () => {
  return ( 
    <>
    <div className='text-white flex flex-col w-1/2 h-full content-center md:space-y-2 md:mt-6 items-center justify-center pr-16 md:pr-12'>
        <h1 className='duration-300 hover:ease-out hover:scale-90 cursor-pointer text-2xl md:text-4xl font-semibold '>Contact</h1>
        <h2 className='duration-300 hover:ease-out hover:scale-90 cursor-pointer text-xs md:text-xl md:pl-9 pl-2 '>Feel Free To Reach out!</h2>
        <div className=" duration-300 hover:ease-out hover:scale-90 flex md:space-x-4  cursor-pointer">
          <span className=' size-14 pl-7 pt-1'>
          <FaPhone size={20}  />
          </span>
                  
                  <p className='text-sm md:text-lg'>+91 9569229947</p>
                </div>
    </div>
    </>
  )
}

export default FooterFirst