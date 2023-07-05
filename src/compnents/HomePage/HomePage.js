import React from "react";
import Bannar from "../Bannar/Bannar";
import Contact from "../Contact/Contact";
import Recommend from "../Recommend/Recommend";
import Services from "../Services/Services";


const HomePage = ()=>{
    return (
        <>
        <Bannar></Bannar>
        <Services></Services>
        <Recommend></Recommend>
        <Contact></Contact>
        </>
    )
}

export default HomePage;