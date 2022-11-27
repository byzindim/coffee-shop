import React from "react";
import './navHeader.scss';
import Logo from '../../../../img/Logo.jpg'

const NavHeader = () => {
    return (
       
        <ul className="nav-header">
            <ul><img src={Logo} alt="" /></ul>
            <li>Coffee house</li>
            <li>Our coffee</li>
            <li>For your pleasure</li>
        </ul>
      
    )
}
export default NavHeader;