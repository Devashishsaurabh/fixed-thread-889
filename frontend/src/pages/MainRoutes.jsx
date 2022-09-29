import React from 'react'
import { Route, Routes } from "react-router-dom";
const MainRoutes = () => {
  return (
   <>
   <Routes>
   <Route path="/"element={<><Navbar /><Homepage /><Footer /></>}></Route>
   <Route path="/login" element={<Login />}></Route>
   <Route path="/signup" element={<Signup />}></Route>
   </Routes>
   
   </>
  )
}

export default MainRoutes