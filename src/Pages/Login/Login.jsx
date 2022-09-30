import { Container, Select, VStack,FormControl,FormLabel,Input,Heading,Text, Checkbox, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function Login(){
    return(<Container p="40px">
                
                <FormControl borderRadius={"10px"} bgColor={"black"} isRequired p={"30px"}>
              
                <VStack color={"white"} gap="10px">
               <Heading>Login</Heading>
               <Text>Fill all the details to Login
               </Text>
               
               
                <Input  border={"1px"} _placeholder={{color:"white"}} borderColor="white" placeholder='Email Address' />
                <Input  border={"1px"} _placeholder={{color:"white"}} borderColor="white" placeholder='Password' />
           
          <Checkbox width={"full"} isInvalid size='md' color={"white"} colorScheme='white' defaultChecked textAlign={"left"}>I agree to the Terms of Use and have read and understand the Privacy Policy
      </Checkbox>
      <Button width="full" fontWeight={"500"} _hover={{ color:"white", bgColor:  "rgb(229,16,117)"}} color={"white"} bgColor={"rgb(229,16,117)"}>Create Account</Button>
        <Text>Don't have an account? <Link to="/signup" >Sign Up</Link></Text>        
      </VStack>
              </FormControl>
              
        
        </Container>)
}