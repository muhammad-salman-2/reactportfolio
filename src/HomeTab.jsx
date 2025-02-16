import React from 'react'
import Home from './Home'

const HomeTab = () => {
  return (
    <>
    <div id='Home' className=' intersect:motion-opacity-in-0 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-30   motion-preset-slide-left motion-duration-[4s] motion-delay-300 motion-preset-fade  h-2/4 py-7'>
        <Home />
    </div>
    </>
  )
}

export default HomeTab