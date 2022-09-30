import { Container, Select, VStack,FormControl,FormLabel,Input,Heading,Text, Checkbox, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function Signup(){
    return(<Container p="40px">
                
                <FormControl borderRadius={"10px"} bgColor={"red.100"} isRequired p={"30px"}>
              
                <VStack color={"black"} gap="10px">
               <Heading>Welcome</Heading>
               <Text>Sign up to join Indiegogo.
               </Text>
               
                <Input border={"1px"} _placeholder={{color:"rgb(42,42,42)"}} borderColor="black" placeholder='Full name' />
                <Input  border={"1px"} _placeholder={{color:"rgb(42,42,42)"}} borderColor="black" placeholder='Email Address' />
                <Input  border={"1px"} _placeholder={{color:"rgb(42,42,42)"}} borderColor="black" placeholder='Password' />
                <Select  colorScheme={"white"} border={"1px"} _placeholder={{color:"rgb(42,42,42)",bgColor:"white"}} borderColor="black" placeholder='Select country'>
                <option>Usa</option>
                <option>Other</option>
                
              </Select>
              <Checkbox width={"full"} isInvalid size='md' colorScheme='white' defaultChecked>
              Sign me up for the Indiegogo newsletter
          </Checkbox>
          <Checkbox width={"full"} isInvalid size='md' colorScheme='white' defaultChecked textAlign={"left"}>I agree to the Terms of Use and have read and understand the Privacy Policy
      </Checkbox>
      <Button width="full" fontWeight={"500"} _hover={{ color:"white", bgColor:  "rgb(229,16,117)"}} color={"white"} bgColor={"rgb(229,16,117)"}>Create Account</Button>
        <Text>Already have an account? <Link to="/login" >Log In</Link></Text>        
      </VStack>
              </FormControl>
              
        
        </Container>)
}