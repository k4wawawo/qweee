import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/data";
import Services from "../components/Services";

const Home = () => {

    return (
        <>
         <HeroSection />
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <Services/>
         <InfoSection {...homeObjThree}/>
         <Footer />
    
        </>
    );
};

export default Home;
