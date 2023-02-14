import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import {Login} from "../Pages/Login";
import QuizHome from "../Pages/QuizHome";
import Signup from "../Pages/Signup";


const MainRoutes = () => {
  return (
    <Box width={"100%"}>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<QuizHome/>} />
          
        </Routes>
     
    </Box>
  );
};

export default MainRoutes;
