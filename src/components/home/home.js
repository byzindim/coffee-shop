import React from "react";
import AboutUs from "./aboutUs/aboutUs";
import Footer from "./footer/footer";
import './home.scss';
import MainBlock from "./mainBlock/mainBlock";
import ProductBest from './productBest/productBest';

const Home = () => {
    return (
        <div className="container">
            <MainBlock />
            <AboutUs />
            <ProductBest />
            <Footer />
        </div>
        
    )
}
export default Home;