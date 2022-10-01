import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Context/Context";
export default function PrivateRoute({children}){
    const{logindata}=useContext(authContext)
    if(logindata.isLogin){
        return children
    }

    return <Navigate to={"/login"}/>
}