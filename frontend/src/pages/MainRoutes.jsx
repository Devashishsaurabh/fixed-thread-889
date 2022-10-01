import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar"
import Home from "./Home"
import Footer from "../Components/Footer"
import Login from "./Login"
import Signup from "./Signup"
import AfterLoginRoutes from './AfterLogin/AfterLoginRoutes';
import Features from './Features';



const MainRoutes = () => {
  return (
   <>
   <Routes>
   <Route path="/"element={<><Navbar /><Home /><Footer /></>}></Route>
   <Route path="/login" element={<Login />}></Route>
   <Route path="/signup" element={<Signup />}></Route>
   <Route path="/clockify/*"element={<AfterLoginRoutes/>}></Route>
   <Route path="/features" element={<><Navbar /><Features /><Footer /></>}></Route>
   </Routes>
   
   </>
  )
}

export default MainRoutes