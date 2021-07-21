import React from 'react';
import classNames from "./footer.module.css";
import UseAnimations from 'react-useanimations';
import twitter from 'react-useanimations/lib/twitter';
import facebook from 'react-useanimations/lib/facebook';
import linkedin from 'react-useanimations/lib/linkedin';

function Footer(props) {
    const {text} = props;
  return (
    <div className = {classNames.container}>
        <div className = {classNames.innerContainer}> 
            <div className = {classNames.heading}> 
                {text}
            </div>
            <div className = {classNames.textBox}> 
                I am currently looking for full time opportunities in Product Design and will be graduating in the 2022 batch from IIT Roorkee. If you have something interesting for me feel free to shoot a mail at <span className={classNames.gmail}> ujjawal@mt.iitr.ac.in </span> 
            </div>
            <div className = {classNames.contact}>
                {/* <img src='images/contact-me/medium.svg' /> */}
                <UseAnimations animation={twitter} size={45} wrapperStyle={{ padding: 10 }} />
                <UseAnimations animation={facebook} size={45} wrapperStyle={{ padding: 10 }} />
                <a href="https://www.linkedin.com/in/garg77/" target= "_blank">
                    <UseAnimations animation={linkedin} size={45} wrapperStyle={{ padding: 10 }} />
                </a>
                
            </div>
            <div className = {classNames.copyright}>
                Designed with ❤️ by Ujjawal Garg
            </div>
        </div>

    </div>
  );
}

export default Footer;