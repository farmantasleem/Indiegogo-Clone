import { Center, Container, Heading, Stack, Text,Input,Button } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import "./Footer.css"
import React from "react";
export default function Footer(){
    return(
        <Container className="footer" pt="90px" pb="100px" bgColor="rgb(245,245,245)" minW={"100%"} >
            <Center>
            <Stack  direction={{base:"column-reverse",md:"row"}} gap={{md:"90px",base:"20px"}}>
                <Stack>
                    <Heading fontSize="20px">EXPLORE</Heading>
                    <Text>What we do</Text>
                    <Text>Funding</Text>
                </Stack>
                <Stack>
                    <Heading fontSize="20px">ABOUT</Heading>
                    <Text>About Us</Text>
                    <Text>Blog</Text>
                    <Text>Trust & Safety</Text>
                    <Text>Help & Support</Text>
                    <Text>Press</Text>
                    <Text>Careers</Text>
                    <Text>Contact</Text>
                </Stack>
                <Stack>
                    <Heading fontSize="20px">ENTREPRENEURS</Heading>
                    <Text>How it Works</Text>
                    <Text>Indiegogo vs KickStarter</Text>
                    <Text>Education Center</Text>
                    <Text>Experts Directory</Text>
                    <Text>Fees</Text>
                    <Text>Enterprise</Text>
                    <Text>China</Text>
                </Stack>

                
                <Stack gap={"10px"}>
                  <Center>  <ChatIcon color="rgb(171,0,95)" fontSize={"40px"}/></Center>
                    <Heading>Find it first on Indiegogo
                    </Heading>
                    <Text>Discover new and clever products in the Indiegogo newsletter
                    </Text>
                    <Input colorScheme={"rgb(42,42,42)"} color="black" placeholder="Enter Your Email Address"/>
                    <Button color={"white"} bgColor="rgb(171,0,95)">SIGN ME UP</Button>
                </Stack>
            </Stack>
            </Center>
        </Container>
    )
}