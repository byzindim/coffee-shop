import React from "react";
import AboutUs from "./aboutUs/aboutUs";
import Footer from "./footer/footer";
import './home.scss';
import MainBlock from "./mainBlock/mainBlock";
import ProductBest from './productBest/productBest';

const Home = () => {
    return (
        <>
            <MainBlock />
            <AboutUs />
            <ProductBest />
            <Footer />
        </>
        
    )
}
export default Home;