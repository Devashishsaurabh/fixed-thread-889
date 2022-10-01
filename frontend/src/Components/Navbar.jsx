import React from 'react'
import {Box} from "@chakra-ui/react"
import  "./styles/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <Box>
    <div className='main_box'> 
    <div className='box1'>
      <div className='box2'>
        <Link to="/"><img src="https://clockify.me/assets/images/clockify-logo.svg" width="120px"/></Link>
        <Link to="features"><p className='blue'>Features</p></Link>
        <p className='blue'>Download</p>
      </div>
      <div className='box3'>
        <Link to ="/login"><p className='blue'>log in </p></Link>
        <Link to="/signup"><button className='sign'>sign up free</button></Link>
      </div>

      </div>
    </div>

   </Box>
  )
}

export default Navbar