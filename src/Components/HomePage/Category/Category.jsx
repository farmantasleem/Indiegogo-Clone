import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CategoryItem from "./CatergoryItem";
export default function Category(){
    return(
        <SimpleGrid p={"20px"} columns={{base:1,md:2}} spacing={5}>
<CategoryItem text="10 Cool & Clever Finds" img="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1662136854/nhkvaqdmlktaxz7cvj4e.jpg"/>
<CategoryItem text="Team Favorites" img="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1663952221/rgdqm0maw6xfl0qmkuxf.png"/>
<CategoryItem text="Spend Under $100" img="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1655332492/xmwmdtjfvyy2mbbre4qo.png"/>
<CategoryItem text="Shipping Now" img="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1659985896/hugs8qpmkxx1uvwalnz4.jpg"/>

</SimpleGrid>
    )
}