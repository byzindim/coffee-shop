import React from "react";
import './mainBlock.scss';
import MainBlockBg from '../../../img/MainBlockBg.jpg'
import NavHeader from "./navHeader/navHeader";

const MainBlock = () => {
    return (
        <div className="main-block">
            <img className="main-block-bg" src={MainBlockBg} alt="MainBlockBg" />
            <NavHeader />

        </div>
    )
}
export default MainBlock;