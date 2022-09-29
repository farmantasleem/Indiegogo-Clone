import React from "react";
import {Flex,Box,Spacer,Container,HStack,Image,Center} from "@chakra-ui/react" 
import{SearchIcon} from "@chakra-ui/icons"
import { Link, Navigate } from "react-router-dom";
import "./navbar.css"

export default function Navbar(){
    return (
        <Container className="navbar" height="60px" pt={{base:"0px",md:"15px"}} maxW={"100vw"} color="rgb(42,42,42)" bgColor="white">
        <Center><Image display={{base:"block",md:"none"}} mt={"20px"} width={170} onClick={()=>{<Navigate to="/"/>}} src="https://smartmicrooptics.com/wp-content/uploads/2017/09/indiegogo-logo.png" alt="logo" /></Center>
        <Flex>
       
  <HStack display={{base:"none",md:"flex"}} gap="20px" >
  <img width={170} onClick={()=>{<Navigate to="/"/>}} src="https://smartmicrooptics.com/wp-content/uploads/2017/09/indiegogo-logo.png" alt="logo" />
    <Link  to="/"  >Explore</Link>
    <Link to="/campaign/top">Our Top Finds</Link>
    <Link to="/campaign/team">Team Favorites</Link>
    <SearchIcon cursor={"pointer"}/>
  </HStack>
  <Spacer />
  <HStack  display={{base:"none",md:"flex"}}  gap="20px">
  <Link to="/" >For Enterpeneurs</Link>
  <Link to="/">Start a Campaign</Link>
  <Link className="login" to="/">Log in </Link>
  <Link to="/">Sign Up</Link>
  </HStack>
</Flex>
</Container>
    )
}