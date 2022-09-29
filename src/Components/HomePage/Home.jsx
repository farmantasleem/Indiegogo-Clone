import React from "react";
import Backtoproject from "./Backtoproject/Backtoproject";
import Category from "./Category/Category";
import Review from "./Review/Review";
import Slider from "./Slider/Slider";
import SubCategory from "./SubCategory/SubCategory";

export default function Home(){
    return(
<>

<Slider/>
<Category/>
<SubCategory/>


<Backtoproject/>
<Review/>

</>
    )
    
}