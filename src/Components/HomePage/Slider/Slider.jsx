import React, { useEffect, useState } from "react";
import one from "./assets/one.png"
import two from "./assets/two.png"
import three from "./assets/three.png"
import mone from "./assets/mone.png"
import mtwo from "./assets/mtwo.png"
import mthree from "./assets/mthree.png"
import "./slider.css"
import { Box, Image } from "@chakra-ui/react";
export default function Slider(){
    const[image,setimage]=useState(one)
    const[mimage,setmimage]=useState(mthree)

    useEffect(function(){
        setTimeout(() => {
            if(image==one){
                setimage(two)
              
               
            }else if(image==two){
                setimage(three)
                
             
            }else{
                setimage(one)
            
               
            }  
            if(mimage==mone){
                setmimage(mtwo)
            }  else if(mimage==mtwo){
                setmimage(mthree)
            }else{
                setmimage(mone)
            }
        }, 2000);
    },[image])
    return(
        <div className="slider">
     <Box height={{md:"425px",base:"350px"}} backgroundSize={{base:"120%",md:"auto"}} backgroundImage={{base:mimage,md:image}}></Box>
        </div>
    )
}