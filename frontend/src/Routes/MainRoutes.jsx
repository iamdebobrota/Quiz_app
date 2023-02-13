import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Login from "../Pages/Login";
import QuizHome from "../Pages/QuizHome";
import Signup from "../Pages/Signup";


const MainRoutes = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<QuizHome/>} />
          
        </Routes>
     
    </>
  );
};

export default MainRoutes;
