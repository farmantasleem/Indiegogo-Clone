import { Container, Select, VStack,FormControl,FormLabel,Input,Heading,Text, Checkbox, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
export default function Signup(){
    let navigate=useNavigate()
    const[loading,setloading]=useState(false)
    const[data,setdata]=useState({
        name:"",
        email:"",
        password:""
    })
    
    function Handlechange(event){
        const{name,value}=event.target
        setdata({
            ...data,[name]:value
        })
    }
    function Handlesubmit(){
       setloading(true)
        axios.post("https://json-server-farman.herokuapp.com/login",{
           ...data,id:data.email
        }).then(()=>{
            setloading(false)
            navigate("/login")
        }).catch(()=>{
            alert("Enter a valid Email id")
            setloading(false)
        })
    }
    if(loading){
        return <Loading/>
    }
    return(<Container p="40px">
                
                <FormControl borderRadius={"10px"} bgColor={"red.100"} isRequired p={"30px"}>
              
                <VStack color={"black"} gap="10px">
               <Heading>Welcome</Heading>
               <Text>Sign up to join Indiegogo.
               </Text>
               
                <Input name="name" value={data.name} onChange={Handlechange} border={"1px"} _placeholder={{color:"rgb(42,42,42)"}} borderColor="black" placeholder='Full name' />
                <Input name="email"  onChange={Handlechange} border={"1px"} _placeholder={{color:"rgb(42,42,42)"}} borderColor="black" placeholder='Email Address' />
                <Input  name="password" onChange={Handlechange} border={"1px"} _placeholder={{color:"rgb(42,42,42)"}} borderColor="black" placeholder='Password' />
                <Select  colorScheme={"white"} border={"1px"} _placeholder={{color:"rgb(42,42,42)",bgColor:"white"}} borderColor="black" placeholder='Select country'>
                <option>Usa</option>
                <option>Other</option>
                
              </Select>
              <Checkbox width={"full"} isInvalid size='md' colorScheme='white' defaultChecked>
              Sign me up for the Indiegogo newsletter
          </Checkbox>
          <Checkbox width={"full"} isInvalid size='md' colorScheme='white' defaultChecked textAlign={"left"}>I agree to the Terms of Use and have read and understand the Privacy Policy
      </Checkbox>
      <Button onClick={Handlesubmit} width="full" fontWeight={"500"} _hover={{ color:"white", bgColor:  "rgb(229,16,117)"}} color={"white"} bgColor={"rgb(229,16,117)"}>Create Account</Button>
        <Text>Already have an account? <Link to="/login" >Log In</Link></Text>        
      </VStack>
              </FormControl>
              
        
        </Container>)
}