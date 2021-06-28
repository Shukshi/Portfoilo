import React from 'react';
import ReactDOM from "react-dom";
import classNames from './banner.module.css';
function Banner() {
  return (
    <div className={classNames.container}> 
        <div className={classNames.innerContainer}>
            <div className={classNames.textContainer}> 
                <div className={classNames.heading}>
                    Hemlo!
                </div>
                <div className={classNames.text}> 
                    Yes, that’s me. I’m Ujjawal Garg, a self-taught Product Designer from IIT Roorkee. I am an accidental engineer cum musician meant to be designer. Passion to solve the digital problems and learning alongside is what drives me in the whole design process.
                </div>
            </div> 
            <div className={classNames.imageContainer}>
                <div className={classNames.boundary}>
                    
                </div>
                <div>
                    <img className={classNames.image} src="images/Ujjawal.png" />
                </div>
                
            </div>

            <div className={classNames.scrolling}> 
                Scroll to know <span className={classNames.underline}> <span className={classNames.knowmore}> more </span> </span>
            </div>
        </div>
    </div>
  );
}

export default Banner;