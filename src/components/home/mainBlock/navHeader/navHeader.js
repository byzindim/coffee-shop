import React from "react";
import './navHeader.scss';
import Logo from '../../../../img/Logo.png'

const NavHeader = () => {
    return (
       
        <ul className="nav-header">
            <li className="logo-img-header"><img src={Logo} alt="" /></li>
            <li className="nav-header-li">Coffee house</li>
            <li className="nav-header-li">Our coffee</li>
            <li className="nav-header-li">For your pleasure</li>
        </ul>
      
    )
}
export default NavHeader;