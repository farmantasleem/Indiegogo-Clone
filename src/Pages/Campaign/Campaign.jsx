import { Center, Container, Heading, Text, VStack,SimpleGrid} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import CampaignCart from "./CampaignCart";


export default function Campaign(){
    const[data,setdata]=useState([])
    const[loading,setloading]=useState(true)
    function Getdata(){
        axios.get("https://json-server-farman.herokuapp.com/data").then((res)=>{
            setdata(res.data)
           setTimeout(() => {
            setloading(false)
           }, 1000);
    })
    }const{id}=useParams()
    useEffect(()=>{
        Getdata()
    },[])
if(loading){
    return <Loading/>
}

    


    return(<><Container  backgroundSize="100%" minW="100%" minH={{base:"fit-content",md:"300px"}} bgRepeat={"no-repeat"} bgImage={id=="team"?"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1441311610/rdre527vhsnrg20hjugp.jpg":"https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655327120/p8adqppjwcthfv0rlffg.jpg"}>
            <Center minH={{base:"fit-content",md:"300px"}} >
                <VStack color={id=="team"?"rgb(42,42,42)":"white"}  m="auto" alignItems={"center"}>
                <Center>
                    <Heading m={{base:"10px",md:"auto"}}>{id=="team"?"Indiegogo Team Favorites":"10 Cool & Clever Finds"}
                    </Heading></Center>
                    <Center>
                    <Text mt={{base:"0px",md:"20px"}}>Campaigns we're loving this week
                    </Text>
                    </Center>
                </VStack>
            </Center>
        
        </Container>
        <Center minW="full" mb={"20px"}>
        <SimpleGrid mt="30px" columns={{base:1,md:2,lg:4}} spacing={{base:"20px",md:"15px"}}>
 

       {
        

        data.map(function(e){
           return <CampaignCart
           img={e.img}
           price={e.prc}
           title={e.name}
           category={e.category}
           desc={e.desc}
           id={e.id}
           key={e.id}
           
           />
        })
       }</SimpleGrid>
       </Center>
        </>)
}