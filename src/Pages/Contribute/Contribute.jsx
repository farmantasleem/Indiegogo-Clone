import { Container, Stack, VStack, Text, Heading, Input, FormLabel, FormControl, Radio, Checkbox, RadioGroup, InputGroup, InputLeftElement, InputRightElement, Divider, HStack, Spacer, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CheckIcon, LockIcon } from "@chakra-ui/icons"
import axios from "axios";
import Loading from "../Loading/Loading";
export default function Contribute() {
    const [searchparams, setsearchparams] = useSearchParams()
    const[loading,setloading]=useState(true)
    const projectid = searchparams.get("projectid")
    const amount = searchparams.get("amount")
    let Navigate=useNavigate()
    const [value, setvalue] = useState(amount)
    const [tip, settip] = useState(0)
    const[data,setdata]=useState({});
    function getdata(){
        axios.get(`https://json-server-farman.herokuapp.com/data/${projectid}`).then((res)=>{
            setdata(res.data)
            setloading(false)
        })
    }
function Submit(){
    if(value>0){
        setloading(true)
        setTimeout(()=>{
            setloading(false)
            alert("Successful,Being Redirect to Campaign Page")
            Navigate("/campaign/top")
        },1000)
    
    }else{
        alert("Enter Valid Amount")
    }
}
    useEffect(()=>{
        getdata()
    },[])
if(loading){
    return <Loading/>
}
    return (<Container color={"black"} minW={"90%"} pt="40px" pb="40px">
        <Stack width={"full"} direction={{base:"column",md:"row"}} gap={"40px"}>
            <VStack pl="5px" textAlign={"left"} gap="19px" width={{base:"100%",md:"50%"}}>
                <Text w="full">YOU'RE CONTRIBUTING TO 
                </Text>

                <Heading textTransform={"capitalize"} fontWeight={"500"} color="rgb(42,42,42)" fontSize={"25px"} noOfLines="2" w="full" pr="20px">{data.name}</Heading>
                <Heading color="rgb(42,42,42)" fontSize={"20px"} w="full">Secure Payment  <LockIcon color={"black"} /></Heading>
                <FormControl gap={"10px"} textAlign={"left"} p={"15px"} border={"1px"} borderColor="silver" isRequired>
                    <VStack gap={"10px"} textAlign={"left"} w="full" alignItems={"left"} >
                        <FormLabel>Name on Card</FormLabel>
                        <Input border={"1px"} borderColor="silver" _placeholder={{ color: "rgb(42,42,42)" }} variant='outline' placeholder='Name on Card' />
                        <FormLabel>Card Information</FormLabel>
                        <Input border={"1px"} borderColor="silver" _placeholder={{ color: "rgb(42,42,42)" }} variant='outline' placeholder='Card Number' />
                        <Checkbox isInvalid size='md' colorScheme='white' defaultChecked>
                            Remember this Information
                        </Checkbox>
                    </VStack>
                </FormControl>
                <VStack w="full" pl="5px">
                    <Heading color="rgb(42,42,42)" fontSize={"19px"} w="full">Add a tip to Indiegogo
                    </Heading>
                    <Text>By supporting Indiegogo, you are helping us bring the power of community to important causes around the world. Learn more.
                    </Text>
                    <RadioGroup w="full" textAlign={"left"} value={tip} onClick={(event) => { settip(event.target.value) }} defaultValue='1'>
                        <Stack>
                            <Radio isInvalid outline={"1px"} outlineColor="black" value="10" >
                                $10
                            </Radio>
                            <Radio isInvalid value='20'>$20</Radio>
                            <Radio isInvalid value='30'>$30</Radio>
                            <Radio isInvalid colorScheme={"green"} value='0'>Next Time</Radio>
                        </Stack>
                    </RadioGroup>
                </VStack>
            </VStack>
            <VStack textAlign={"left"} p="10px" width={{base:"100%",md:"40%"}}>
                <Heading w="full" fontSize={"23px"} color="rgb(42,42,42)">Contribution summary
                </Heading>
                <Text pt="10px" w="full" fontWeight={"300"}>Your contribution
                </Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children='$'
                    />
                    <Input onChange={(event) => { setvalue(event.target.value) }} border={"2px"} borderColor="silver" type={"number"} variant='outline' colorScheme={"blue"} _placeholder={{ color: "silver" }} value={value}   placeholder='Enter amount' />
                    <InputRightElement children={<CheckIcon color='green.500' />} />
                </InputGroup>
                <Text w="full" fontWeight={"300"}>This does not include a perk</Text>
                <Divider w="full" bgColor={"black"} height={"1px"} />
                <HStack w="full">
                    <Text>Subtotal</Text>
                    <Spacer />
                    <Text>$ {value}</Text>
                </HStack>
                <HStack w="full">
                    <Text>Indiegogo Tip</Text>
                    <Spacer />
                    <Text>$ {tip}</Text>
                </HStack>
                <HStack w="full" pt={"20px"} pb="40px">
                    <Heading fontSize={"24px"}>ESTIMATED TOTAL                </Heading>
                    <Spacer />
                    <Heading fontSize={"24px"}>$ {Number(tip) + Number(value)}</Heading>
                </HStack>
                <Checkbox  pb="40px" isInvalid size='md' outlineColor={"black"} colorScheme='white' defaultChecked>     i agree to the Terms of Use and have read and understand the Privacy Policy
                </Checkbox>
                <Button onClick={Submit} fontWeight={"400"} w="full" _hover={{color:"rgb(217,14,109)",bgColor:"silver"}} leftIcon={<LockIcon/>} color='white' backgroundColor={"rgb(217,14,109)"} variant='solid'>
               SUBMIT PAYMENT
              </Button>
            </VStack>
        </Stack>

    </Container>

    )
}