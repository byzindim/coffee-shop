import React from "react";
import './mainBlock.scss';
import MainBlockBg from '../../../img/MainBlockBg.jpg'
import TextContent from "./textContent/textContent";


const MainBlock = () => {
    return (
        <div className="main-block">
            <img className="main-block-bg" src={MainBlockBg} alt="MainBlockBg" />
            <TextContent />
        </div>
    )
}
export default MainBlock;