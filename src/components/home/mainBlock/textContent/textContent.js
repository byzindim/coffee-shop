import React from "react";
import './textContent.scss';
import BeansLogo from '../../../../img/BeansLogo.png'
import Logo from '../../../../img/Logo.png'
const TextContent = () => {
    return (
        <div className="text-content">
            <ul className="nav-header">
                <li className="logo-img-header"><img src={Logo} alt="" /></li>
                <li className="nav-header-li">Coffee house</li>
                <li className="nav-header-li">Our coffee</li>
                <li className="nav-header-li">For your pleasure</li>
            </ul>
            <div>
                <h1 className="first-text">Everything You Love About Coffee</h1>
                <img className="logo-coffee" src={BeansLogo} alt="" />
                <h2 className="second-text">We makes every day full of energy and taste</h2>
                <h2 className="second-text">Want to try our beans?</h2>
                <button className="info-next">More</button>
            </div>
            
        </div>
    )
}
export default TextContent;