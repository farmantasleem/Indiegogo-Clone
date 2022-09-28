import React from "react";
import Backtoproject from "./Backtoproject/Backtoproject";
import Category from "./Category/Category";
import Navbar from "./Navbar/Navbar";
import Review from "./Review/Review";
import Slider from "./Slider/Slider";
import SubCategory from "./SubCategory/SubCategory";

export default function Home(){
    return(
<>
<Navbar/>
<Slider/>
<Category/>
<SubCategory/>


<Backtoproject/>
<Review/>
</>
    )
    
}