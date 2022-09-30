import { Container, Stack, VStack, Text, Heading, PopoverTrigger, Button, PopoverBody, PopoverCloseButton, PopoverArrow, PopoverContent, Popover, PopoverHeader, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate,useSearchParams } from "react-router-dom";
export default function PopoverComponent() {
    const [value, setvalue] = useState("");
    let navigate = useNavigate()
    const[searchparams,setsearchparams]=useSearchParams()
    function handleclick() {
       if(value==""){
        alert("Enter A valid Amount")
       }else{
        let obj={id:searchparams.get("projectid"),amount:value}
        setsearchparams(obj)
        navigate(`/contribute/?projectid=${searchparams.get("projectid")}&amount=${value}`)
       }

    }
    return (
        <Popover bgColor="white" placement='top-start'>
            <PopoverTrigger>
                <Button _hover={{ color: "white", bgColor: "silver" }} color={"white"} bgColor={"rgb(229,16,117)"}>Contribute</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader bgColor={"rgb(229,16,117)"} color="white" fontWeight='semibold'>Back this project
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody bgColor="white">
                    <VStack>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                            />
                            <Input type={"number"} variant='outline' colorScheme={"blue"} _placeholder={{ color: "silver" }} value={value} onChange={(event) => { setvalue(event.target.value) }} placeholder='Enter amount' />
                            <InputRightElement children={<CheckIcon color='green.500' />} />
                        </InputGroup>

                        <Text fontSize={"13px"}>Contributions are not associated with perks
                        </Text>
                        <Button borderColor={"silver"} color={"rgb(229,16,117)"} border="1px" onClick={handleclick}>Submit</Button>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}