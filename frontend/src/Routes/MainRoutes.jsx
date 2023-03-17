import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import { Login } from "../Pages/Login";
import QuizHome from "../Pages/QuizHome";
import Signup from "../Pages/Signup";
import { ReqAuth } from "../components/ReqAuth";
import { useSelector } from "react-redux";
import Admin from "../Pages/Admin";
import Profile from "../Pages/Profile";

const MainRoutes = () => {
  const {isAdmin, token} = useSelector((state) => state.AuthReducer);
 
  return (
    <Box width={"100%"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      
        <Route path="/admin" element={ <ReqAuth><Admin /></ReqAuth>} />
        <Route path="/profile" element={ <ReqAuth><Profile /></ReqAuth>} />
        
          <Route
            path="/quiz"
            element={
              <ReqAuth>
                <QuizHome />
              </ReqAuth>
            }
          />
        
       
      </Routes>
    </Box>
  );
};

export default MainRoutes;
