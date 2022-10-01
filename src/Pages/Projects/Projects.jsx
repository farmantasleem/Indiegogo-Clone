import { Container, useColorModeValue, Stack, Image, VStack, Button, Heading, Text, HStack, Tabs, TabList, Tab, TabPanels, TabPanel, Center } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios"
import { FaTwitter, FaFacebook } from "react-icons/fa"
import "./Project.css"
import CampaignCart from "../Campaign/CampaignCart"
import data from "../Campaign/data.json"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import PopoverComponent from "./Popover";
export default function Projects() {
  const [gdata, setdata] = useState([])
  const { projectid } = useParams()
  const [loading, setloading] = useState(true)
const[searchparams,setsearchparams]=useSearchParams()
  let navigate = useNavigate()
  function Getdata(projectid) {
    axios.get(`https://json-server-farman.herokuapp.com/data/${projectid}`).then((res) => {

      setdata(res.data)
      setTimeout(() => {
        setloading(false)
      }, 1000);

    })
  }

  useEffect(() => {
    setloading(true)
    Getdata(projectid)
    setsearchparams({...searchparams,projectid})

  }, [projectid])
  const colors = useColorModeValue(
    ['rgb(245,245,245)', 'teal.50'],
    ['white.900', 'red.50'],)
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]
  if (loading) {
    return <Loading />
  }

  return (<Container className="projects" minW="100%" p={"10px"} >
    <Stack borderBottom="2px" pb={"10px"} pt="10px" borderColor={"rgb(42,42,42)"} w="full" direction={{ base: "column", md: "row" }}>
      <Image height="450px" w={{ base: "100%", md: "50%" }} src={gdata.img} />
      <VStack pl={"20px"} gap={{ base: "10px", md: "20px" }} w={{ base: "100%", md: "50%" }} textAlign={"left"}>
        <Text w={"full"} textAlign="left">{gdata.category}</Text>
        <Heading  w={"full"} textAlign="left">{gdata.name}
        </Heading>
        <Text  w={"full"} textAlign="left">
          {gdata.desc}</Text>
        <Heading w={"full"} textAlign={"left"}>{gdata.prc} by 3,910 backers</Heading>
        <HStack w="full" textAlign={"left"}> <PopoverComponent/> <Button bgColor={"silver"}>Follow</Button><HStack>
          <Button bgColor={"silver"} colorScheme='facebook' leftIcon={<FaFacebook />}>
            Share
          </Button>
          <Button bgColor={"silver"} colorScheme='twitter' leftIcon={<FaTwitter />}>
            Share
          </Button>
        </HStack></HStack>
      </VStack>
    </Stack>

    <Stack direction={{ base: "column", md: "row" }} w="100%" mt={"20px"}>



      <Tabs minW={{ base: "100%", md: "49.5%" }} maxW={{ base: "100%", md: "49.5%" }} onChange={(index) => setTabIndex(index)} bg={bg}>
        <TabList>
          <Tab>Story</Tab>
          <Tab>Faq</Tab>

        </TabList>
        <TabPanels p='2rem'>
          <TabPanel textAlign={"left"} width={{ base: "100%", md: "100%" }}>{gdata.story!=undefined?gdata.story:<>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "
            </>}</TabPanel>
          <TabPanel textAlign={"left"} width={{ base: "100%", md: "100%" }}>{gdata.faq!=undefined?gdata.faq:<>
            Frequently Asked Question
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "
            </>}
        </TabPanel>
        </TabPanels>
      </Tabs>
      <Center w={{ base: "100%", md: "50%" }} >
        <VStack w={{ base: "100%", md: "50%" }} gap="10px">
          <Heading fontSize={"23px"}>Spend Under $100
          </Heading>
          {
            data.selection1.map(function (e) {
              return <CampaignCart
                img={e.img}
                price={e.prc}
                title={e.name}
                category={e.category}
                desc={e.desc}
                id={e.id}
              />
            })
          }

        </VStack>
      </Center>



    </Stack>




  </Container>

  )
}