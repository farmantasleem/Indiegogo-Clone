import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Components/HomePage/Home";
import Campaign from "../Pages/Campaign/Campaign";
import Contribute from "../Pages/Contribute/Contribute";
import CreateCampaign from "../Pages/CreateCampaign/CreateCampaign";
import Login from "../Pages/Login/Login";
import Projects from "../Pages/Projects/Projects";
import Signup from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/campaign/:id" element={<Campaign/>}/>
            <Route path="/projects/:projectid" element={<Projects/>}/>
            <Route path="/contribute/" element={<PrivateRoute><Contribute/></PrivateRoute>}/>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/createcampaign" element={<PrivateRoute><CreateCampaign/></PrivateRoute>}/>
        </Routes>
    )
}