import { Box, Container, SimpleGrid, Spacer } from "@chakra-ui/react";
import React from "react";
import "./subcategory.css"


function Subitem({img,text}){
    return (
        <div className="subitem"  style={{display:"flex",flexDirection:"column",marginTop:"20px",marginBottom:"20px",cursor:"pointer"}}>
        <img style={{height:"60px",margin:"auto"}} src={img}/> 
        <p style={{fontSize:"14px",marginTop:"10px"}}>{text}</p>
        </div>
    )
}
export default function SubCategory(){
    return(<div className="subcategory" >
        <h1>Which categories interest you?
        </h1>
        <p>Discover projects just for you and get great recommendations when you select your interests.
        Or explore our top categories</p>
        
  <Container maxW="100vw" >
    <SimpleGrid maxW={{base:"100%",md:"70%"}} margin="auto" columns={{base:3,md:6}} spacing={1}>
   <Subitem img="https://cdn-icons-png.flaticon.com/512/5974/5974636.png" text="Home"/>
   <Subitem img="https://cdn-icons-png.flaticon.com/512/2097/2097276.png" text="Phone & Accessories"/>
   <Subitem img="https://cdn-icons-png.flaticon.com/512/8108/8108372.png" text="Travel & Outdoors"/>
   <Subitem img="https://cdn-icons-png.flaticon.com/512/2382/2382461.png" text="Health & Fitness"/>
   <Subitem img="https://cdn-icons-png.flaticon.com/512/3170/3170080.png" text="Audio"/>
   <Subitem img="https://cdn-icons-png.flaticon.com/512/868/868313.png" text="Film"/>
</SimpleGrid>
</Container>
    </div>)
}