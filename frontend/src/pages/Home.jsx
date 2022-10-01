import axios from 'axios'
import React from 'react'
import Header from '../Components/Home/Header'
import Free from '../Components/HomeSections/Free'
import Rating from '../Components/HomeSections/Rating'
import Support from '../Components/HomeSections/Support'
import Track from '../Components/HomeSections/Track'
import Tracking from '../Components/HomeSections/Tracking'

const Home = () => {
  return (
    <div>
      <Header/>
      <Track />
      <Free />
      <Support />
      <Rating /> 
      <Tracking />
    </div>
  )
}

export default Home