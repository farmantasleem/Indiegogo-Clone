import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "../Components/HomePage/Home";
import Campaign from "../Pages/Campaign/Campaign";
import Projects from "../Pages/Projects/Projects";
export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/campaign/:id" element={<Campaign/>}/>
            <Route path="/projects/:projectid" element={<Projects/>}/>
        </Routes>
    )
}