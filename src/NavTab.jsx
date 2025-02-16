import React from 'react'
import Nav from './Nav'
import MyName from './MyName'

const NavTab = () => {
  return (
    <>
    <div className=' flex items-center py-11'>
        <MyName />
        <Nav />
    </div>
    </>
  )
}

export default NavTab