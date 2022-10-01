import { Container,Heading,Tabs,TabList,TabPanel,TabPanels,Tab, Box, VStack, Stack, Progress, Textarea, FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React,{useState} from "react";
export default function CreateCampaign(){
    const [tabIndex, setTabIndex] = useState(0)
    const[value,setvalue]=useState(0)
    const[data,setdata]=useState({
        img:"",
        name:"",
        category:"",
        desc:"",
        prc:"",
        faq:"",
        story:"",
        duration:"",
    })
  
    const handleSliderChange = (event) => {
      setTabIndex(parseInt(event.target.value, 10))
    }
  
    const handleTabsChange = (index) => {
      setTabIndex(index)
    }
    const inputchange=(event)=>{
        const{name,value}=event.target;
        setdata({...data,[name]:value})

    }
    function handlesubmit(){
        if(data.category.length>0 && data.desc.length>0 && data.duration>0 ||data.duration.length>0 && data.name.length>0 && data.img.length>0 && data.prc.length>0 || data.prc>0 && data.faq.length>0 ){
            console.log(data)
            axios.post("https://json-server-farman.herokuapp.com/data/",{
                ...data
            })
        }else{
            alert("Please,Fill all the details")
        }
    }

    return(<Container minW={"100%"} color={"black"}>
   <Stack direction={"row"}  width={"100%"}>
    <VStack minW={"100%"}  p="20px" borderRadius={"10px"} textAlign={"left"}>
 
   <Box borderRadius={"10px"} p="20px" bgColor={"red.100"}  minW={"50%"}>
   <Heading w="100%" pb="10px"  textAlign={"Center" } fontSize="23px">CREATE NEW CAMPAIGN</Heading>
   <Progress  hasStripe bgColor={"silver"} colorScheme={"green"} value={value} />

   <Tabs  colorScheme='white' maxW={"full"} index={tabIndex} onChange={handleTabsChange}>
     <TabList mt={"10px"}  color={"white"} bgColor="rgb(236,16,120)" >
       <Tab _selected={{ color: 'rgb(236,16,120)', bg: 'white' }} onClick={()=>{setvalue(20)}} minWidth={"40%"}>Basic Details</Tab>
       <Tab _selected={{ color: 'rgb(236,16,120)', bg: 'white' }} onClick={()=>{setvalue(50)}} minWidth={"30%"}>Story</Tab>
       <Tab  _selected={{ color: 'rgb(236,16,120)', bg: 'white' }} onClick={()=>{setvalue(100)}} minWidth={"30%"}>Faq</Tab>
     </TabList>
     <TabPanels>
       <TabPanel>
       <FormControl isRequired>
     <VStack textAlign={"left"} >
     <FormLabel width={"full"}>Campaign Title</FormLabel>
     <Input name="name" value={data.name} onChange={inputchange} border="1px" borderColor={"teal"} _placeholder={{color:"rgb(42,42,42)"}} placeholder='My Campaign Title' />
     <FormLabel pt="10px" width={"full"}>Campaign Tagline</FormLabel>

     <Input name="desc" value={data.desc} onChange={inputchange} border="1px" borderColor={"teal"} _placeholder={{color:"rgb(42,42,42)"}} placeholder='Type here' />
     <FormLabel pt="10px" width={"full"}>Image Link of Campaign</FormLabel> <Input border="1px" borderColor={"teal"} _placeholder={{color:"rgb(42,42,42)"}} name="img" value={data.img} onChange={inputchange} placeholder='Image Link' />
     <FormLabel pt="10px" width={"full"}>Category of Campaign</FormLabel> <Input border="1px"  borderColor={"teal"} _placeholder={{color:"rgb(42,42,42)"}} name="category" value={data.catetgory} onChange={inputchange} placeholder='Enter Category' />
     <FormLabel pt="10px" width={"full"}>Duration Of Campaign</FormLabel>  <Input border="1px" borderColor={"teal"} _placeholder={{color:"rgb(42,42,42)"}} name="duration" value={data.duration} onChange={inputchange} placeholder='Eg. 29 in Number only' />
     <FormLabel pt="10px" width={"full"}>Campaign Goal Amount</FormLabel>  <Input border="1px" borderColor={"teal"} _placeholder={{color:"rgb(42,42,42)"}} name="prc" value={data.prc} onChange={inputchange} placeholder='Amounty' />
     </VStack>
       </FormControl>
       


       </TabPanel>
       <TabPanel>
         <Textarea minH={"400px"} placeholder="Type your Story" _placeholder={{color:"black"}} border={"2px"} borderColor="silver" name="story" value={data.story} onChange={inputchange}></Textarea>
       </TabPanel>
       <TabPanel>
       <Textarea minH={"400px"} name="faq" value={data.faq} onChange={inputchange} placeholder="Frequently Asked Question eg.Why did you start it"  _placeholder={{color:"black"}} border={"2px"} borderColor="silver"></Textarea>
       </TabPanel>
     </TabPanels>
   </Tabs>
 </Box>
    <Button onClick={handlesubmit} _hover={{color:"rgb(236,16,120)",bgColor:"white"}} mb="10px" width={"50%"} bgColor={"rgb(236,16,120)"} color="white">Publish</Button>
 </VStack>
   
    </Stack>
        </Container>)
}