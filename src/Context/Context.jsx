import React, { useState } from "react";
import { createContext } from "react";
export const authContext=createContext()
export default function Context({children}){
    const[logindata,setlogindata]=useState({
        isLogin:false,name:""
    })
    return(
        <authContext.Provider value={{logindata,setlogindata}}>
{children}
        </authContext.Provider>
    )
}