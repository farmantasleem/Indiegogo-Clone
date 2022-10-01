import { Image, VStack,Heading,Text,Progress, HStack, Spacer,Divider } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import React from "react";
import { Navigate,useNavigate } from "react-router-dom";
export default function CampaignCart({img,title,price,desc,category,id}){
  let navigate=useNavigate()
  function handleclick(){
      navigate(`/projects/${id}`)
  }
    return(<VStack cursor={"pointer"} onClick={()=>{handleclick(id)}}  bgColor="rgb(245,245,245)" borderRadius={"5px"}  textAlign={"left"} ml={{base:"15px",md:"0px"}} mt={{base:"10px",md:"0px"}} p={{base:"0px",md:"15px"}} maxW={{base:"90%",md:"320px"}} color="rgb(42,42,42)">
            <Image  height={{base:"250px",md:"220px"}} width={{base:"100%",md:"320px"}} src={img}/>
            <Divider orientation='horizontal' />
            <Heading fontSize={"17px"} width="full" textAlign="left">{title}</Heading>
            <Text noOfLines={"2"} width="full" textAlign={"left"} fontSize={"14px"}>{desc}
         </Text>
        
         <Heading width={"full"} textAlign="left" fontSize={"16px"}>{category}</Heading>
         <VStack  minW={"full"} maxW="full">
            <HStack minW={"full"} maxW="full">
          <Text>{price} USD raised</Text>
          <Spacer/>
          <Text>1.7%</Text>
            </HStack>
            <Progress height={"4px"}  minW="full"  colorScheme='blue' value={80} />
         </VStack>
        <HStack width={"full"}> <TimeIcon/> <Text fontSize={"14px"} >29 Days Left</Text></HStack>
        
        </VStack>
    )
}