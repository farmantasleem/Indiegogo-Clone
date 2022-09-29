import { Center, Container, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ReviewItem from "./ReviewItem";

export default function Review(){
    return(
        <Container minW={"100%"} mb="40px">
        <Center>
      <VStack color={"rgb(42,42,42)"}>
      <Heading>From the Indiegogo Review
      </Heading>
      <Text pb={10}>Your behind-the-scenes view of the people and stories behind Indiegogo projects
      </Text>
      </VStack>
        </Center>
           
         
        <Center>
        <Stack minW="80%" direction={{md:"row",base:"column"}}>
        <ReviewItem para="How to raise more funds after your campaign" title="Indiegogo and StartEngine Join Forces" img="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660231108/h3ayekkkolooq5k9ilvq.png" alt="reviewcard"/>
        <ReviewItem
        para="We review the new Ayaneo Air and put it to the test!
        "
        title="I Tried This Mini Gaming Handheld For A Day
        " img="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660454271/xq8oqua1iie8y5abbxoi.png"/>
        <ReviewItem 
        para="Which ones will you fund next?
        "
        title="5 New Gadgets Under $100
        "
        img="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660288199/ak5wz5zhr0ghiwwravay.png"
        />
        </Stack>
        </Center>
        </Container>
    )
}