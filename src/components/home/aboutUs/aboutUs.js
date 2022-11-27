import React from "react";
import './aboutUs.scss';
import BeansLogo from '../../../img/BeansLogo.png'

const AboutUs = () => {
    return (
        <div className="about-us">
        <h2>About Us</h2>
        <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
        </p>
        <img className="logo-coffee" src={BeansLogo} alt="" />
        </div>
        
    )
}
export default AboutUs;