import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import Footer from "../Components/Footer";
import Login from "./Login";
import Signup from "./Signup";
import AfterLoginRoutes from "./AfterLogin/AfterLoginRoutes";
import RequiredAuth from "../HOC/RequiredAuth";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/clockify/*" element={

          <RequiredAuth>
            <AfterLoginRoutes />
          </RequiredAuth>
        }></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
