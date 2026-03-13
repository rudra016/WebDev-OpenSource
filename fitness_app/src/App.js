import React from "react";
import { Route, Routes } from "react-router-dom"; //routes
import { Box } from "@mui/material"; //box component - div with shading and color
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
                       
const App = () => {                                      //responsive for larger screens , auto margin
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">  
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer/>
    </Box>
  );
};

export default App;
