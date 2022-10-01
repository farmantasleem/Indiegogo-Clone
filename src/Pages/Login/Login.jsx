import { Container, Select, VStack,FormControl,FormLabel,Input,Heading,Text, Checkbox, Button, Alert } from "@chakra-ui/react";
import axios from "axios";
import React,{useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/Context";
import Loading from "../Loading/Loading";
export default function Login(){
    const[loading,setloading]=useState(false)
    let navigate=useNavigate()
    const{logindata,setlogindata}=useContext(authContext)
    const[data,setdata]=useState({
        email:"",
        password:""
    })
    const[loginarr,setloginarr]=useState([])
    function getdata(){
        
        axios.get(`https://json-server-farman.herokuapp.com/login/${data.email}`).then((res)=>{
            if(res.data.password==data.password){
                setlogindata({...logindata,name:res.data.name,isLogin:true})
                setloading(false)
                navigate(-1)
             
            }

        }).catch((err)=>{
            setloading(false)
            alert("There's no such account")
     }).finally(
        ()=>{
            setloading(false)}
     )
    }
   
    
    function Handlechange(event){
        
        const{name,value}=event.target
        setdata({
            ...data,[name]:value
        })
    }
    function Handlesubmit(){
        setloading(true)
        getdata()
    }
    if(loading){return <Loading/>}
    return(<Container p="40px">
                
                <FormControl borderRadius={"10px"} bgColor={"black"} isRequired p={"30px"}>
              
                <VStack color={"white"} gap="10px">
               <Heading>Login</Heading>
               <Text>Fill all the details to Login
               </Text>
               
               
                <Input name="email" onChange={Handlechange} value={data.email}  border={"1px"} _placeholder={{color:"white"}} borderColor="white" placeholder='Email Address' />
                <Input name="password"  onChange={Handlechange}  value={data.password} border={"1px"} _placeholder={{color:"white"}} borderColor="white" placeholder='Password' />
           
          <Checkbox width={"full"}  isInvalid  size='md' color={"white"} colorScheme="black" iconColor="white" bgColor={"black"} defaultChecked textAlign={"left"}>I agree to the Terms of Use and have read and understand the Privacy Policy
      </Checkbox>
      <Button  onClick={Handlesubmit} width="full" fontWeight={"500"}  _hover={{ color:"white", bgColor:  "rgb(229,16,117)"}} color={"white"} bgColor={"rgb(229,16,117)"}>Log In</Button>
        <Text>Don't have an account? <Link to="/signup" >Sign Up</Link></Text>        
      </VStack>
              </FormControl>
              
        
        </Container>)
}