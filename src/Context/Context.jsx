import React from "react";
import { createContext } from "react";
export const authContext=createContext()
export default function Context(){
    return(
        <authContext.Provider>
            
        </authContext.Provider>
    )
}