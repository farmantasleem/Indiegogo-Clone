import { Button, Center, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import "./backtoproject.css"
export default function Backtoproject(){
    return(
      <Center margin="40px"  maxH="300px" backgroundSize={{base:"200%",md:"100%"}} backgroundRepeat="no-repeat" minH={{md:"450px",base:"300px"}} mb="40px" maxW={{md:"100%",base:"100%"}} backgroundImage="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/homepage/cf-bg-desktop-sm.jpg">
      <Container className="backtoproject">
      <Center>
         <Stack textAlign={"center"} fontSize={{sm:"14px"}}>
         <Heading  width={"fit-content"} fontSize={{md:"50px",sm:"30px"}}
          mb={"20px"} color={"rgb(42,42,42)"} > Back  the project, take the ride
         </Heading>
         <Text margin="auto">Indiegogo is your destination for clever innovations in tech, design, and more, often with special perks and pricing for early adopters. Back a campaign, share your ideas and feedback with the project team - and join the risks and rewards of bringing new products to life.</Text>
         <Button colorScheme={"rgb(42,42,42)"}  rightIcon={<ArrowForwardIcon />}>LEARN ABOUT CROWDFUNDING</Button>
         </Stack>
      </Center>
      </Container>
      </Center>
    )
}