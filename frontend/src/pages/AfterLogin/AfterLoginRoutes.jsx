import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from '../../Components/Sidebar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboard from './Dashboard'
import TimeTracker from './TimeTracker';
import Upgrade from './Upgrade';


const AfterLoginRoutes = () => {
  return (
    <div>
    <Navbar/>
    <div style={{display:"flex"}}>
    <Sidebar/>
    <div>
    <Routes>
    <Route path="/" element={<TimeTracker/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/upgrade" element={<Upgrade />}></Route>
    </Routes>
    </div>
    </div>
    </div>
  )
}

export default AfterLoginRoutes