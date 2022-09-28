import React from "react";
import {Flex,Box,Spacer,Container,HStack} from "@chakra-ui/react" 
import{SearchIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar(){
    return (
        <Container className="navbar" height="60px" pt={{base:"0px",md:"15px"}} maxW={"100vw"} color="rgb(42,42,42)" bgColor="white">
        <Flex>
  <HStack gap="20px">
  <img width={170}  src="https://smartmicrooptics.com/wp-content/uploads/2017/09/indiegogo-logo.png" alt="logo" />
    <Link  to="/">Explore</Link>
    <Link to="/">Our Top Finds</Link>
    <Link to="/">Team Favorites</Link>
    <SearchIcon cursor={"pointer"}/>
  </HStack>
  <Spacer />
  <HStack  display={{base:"none",md:"flex"}}  gap="20px">
  <Link to="/">For Enterpeneurs</Link>
  <Link to="/">Start a Campaign</Link>
  <Link className="login" to="/">Log in </Link>
  <Link to="/">Sign Up</Link>
  </HStack>
</Flex>
</Container>
    )
}