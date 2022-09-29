import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Footer from "../Components/Footer"

const MainRoutes = () => {
  return (
   <>
   <Routes>
   <Route path="/"element={<><Navbar /><Home /><Footer /></>}></Route>
   <Route path="/login" element={<Login />}></Route>
   <Route path="/signup" element={<Signup />}></Route>
   </Routes>
   
   </>
  )
}

export default MainRoutes