import React from "react";
import Navbar from "./header/NavBar";
import Banner from "./body/Banner";
import PlatForm from "./body/PlatForm";
import Footer from "./footer/Footer";


const HomePage = ()=>{
    return (
        <>
        <Navbar/>
        <Banner/>
        <PlatForm/>
        <Footer/>
        </>
    )
}

export default HomePage;