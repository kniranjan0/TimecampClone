import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Mainnav from "../Components/Mainnav";
import {Signup} from "../Components/Signup";
import Homepage from "../Pages/Home/Homepage";
import Feature from "../Pages/Features";
import Integration from "../Components/Integration/Integration";
import { Price } from "../Pages/Pricing/Price";
import ProjectcontextProvider from "../Context/ProjectContext";
import Addprojects from "../Pages/Project/Addprojects";
import { Timestamp } from '../Pages/Timestamp/Timestamp';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
          <Route path='/features' element={<Feature />} />
           <Route path='/integration' element={<Integration />} />
           <Route path='/price' element={<Price/>} />
           <Route path="/timestamp" element={<Timestamp/>}/>
          <Route path="/projects" element={<Addprojects />} />
      <Route path="/project" element={<ProjectcontextProvider>
        <Addprojects />
      </ProjectcontextProvider>} />
      </Routes>
)}
export default MainRoutes

