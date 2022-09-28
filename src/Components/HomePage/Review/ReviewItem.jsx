import { Box, Button, Heading, Image, VStack,Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
export default function ReviewItem({img,title,para}){
    return(<VStack color="rgb(42,42,42)">
        <Image width="350px" src={img}/>
        <Heading overflowWrap="break-word" fontSize={17}>{title}</Heading>
        <Text>{para}
        </Text>
        <Button rightIcon={<ArrowForwardIcon />}>Learn More </Button>
        </VStack>

    )
}