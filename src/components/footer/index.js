import React from 'react';
import classNames from "./footer.module.css";
function Footer(props) {
  return (
    <div className = {classNames.container}>
        <div className = {classNames.innerContainer}> 
            <div className = {classNames.heading}> 
                Let’s get connected  🤙
            </div>
            <div className = {classNames.textBox}> 
                I am currently looking for full time opportunities in Product Design and will be graduating in the 2022 batch from IIT Roorkee. If you have something interesting for me feel free to shoot a mail at <span className={classNames.gmail}> ujjawal@mt.iitr.ac.in </span> 
            </div>
            <div className = {classNames.contact}>
                <img src='images/contact-me/medium.svg' />
                <img src='images/contact-me/twitter.svg'/>
                <img src='images/contact-me/facebook.svg'/>
                <img src='images/contact-me/linkedin.svg'/>
            </div>
            <div className = {classNames.copyright}>
                Designed with ❤️ by Ujjawal Garg
            </div>
        </div>

    </div>
  );
}

export default Footer;