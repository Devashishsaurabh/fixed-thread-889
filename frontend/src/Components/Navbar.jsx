import React from 'react'
import {Box} from "@chakra-ui/react"
import  "./styles/Navbar.css"

const Navbar = () => {
  return (
   <Box>
    <div className='main_box'> 
    <div className='box1'>
      <div className='box2'>
        <img src="https://clockify.me/assets/images/clockify-logo.svg" width="120px"/>
        <p className='blue'>Features</p>
        <p className='blue'>Download</p>
      </div>
      <div className='box3'>
        <p className='blue'>log in </p>
        <button className='sign'>sign up free</button>
      </div>

      </div>
    </div>

   </Box>
  )
}

export default Navbar