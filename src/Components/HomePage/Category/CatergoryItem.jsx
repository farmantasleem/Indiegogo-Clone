import React from "react";
import {Box, Button, Center} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
export default function CategoryItem({img,text}){
let navigate=useNavigate()
    return(
        <Box  bg='tomato' bgImage={img} height='380px'>
        <Center w="full" h="full">
            <h1 style={{fontSize:"30px",color:"white"}}>{text}</h1>
        </Center>
        <Button onClick={()=>{navigate("/campaign/team")}} _hover={{bgColor:"black"}} color={"white"} m={"10px"} position="relative" top={"-60px"} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
   See the Collection
  </Button>
        </Box>
    
      
    )
}