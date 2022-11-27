import React from "react";
import './textContent.scss';
import BeansLogo from '../../../../img/BeansLogo.png'

const TextContent = () => {
    return (
        <div className="text-content">
            <h1 className="first-text">Everything You Love About Coffee</h1>
            <img className="logo-coffee" src={BeansLogo} alt="" />
            <h2 className="second-text">We makes every day full of energy and taste</h2>
            <h2 className="second-text">Want to try our beans?</h2>
            <button className="info-next">More</button>
        </div>
    )
}
export default TextContent;