import React from 'react'
import { Route, Routes } from "react-router-dom";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboard from './Dashboard'
import Project from './Project';
import TimeTracker from './TimeTracker';


const AfterLoginRoutes = () => {
  return (
    <div style={{display:"flex"}}>
        <Sidebar/>
    <div>
    <Routes>
    <Route path="/" element={<TimeTracker/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/project" element={<Project/>}></Route>
    </Routes>
    </div>
    </div>
   
  )
}

export default AfterLoginRoutes