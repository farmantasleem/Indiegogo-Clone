import React from "react";
import {Box, Button, Center} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function CategoryItem({img,text}){
    return(
        <Box  bg='tomato' bgImage={img} height='380px'>
        <Center w="full" h="full">
            <h1 style={{fontSize:"30px"}}>{text}</h1>
        </Center>
        <Button color={"white"} m={"10px"} position="relative" top={"-60px"} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
   See the Collection
  </Button>
        </Box>
    
      
    )
}