import React from 'react';
import ReactDOM from "react-dom";
import './banner.css';
function Banner() {
  return (
    <div className="container"> 
        <div className="innerContainer">
            <div className="textContainer"> 
                <div className="heading">
                    Hemlo!
                </div>
                <div className="text"> 
                    Yes,that’s me. I’m Ujjawal Garg, a self-taught Product Designer from IIT Roorkee. I am an accidental engineer cum musician meant to be designer. Passion to solve the digital problems and learning alongside is what drives me in the whole design process.
                </div>
            </div> 
            <div className="imageContainer">
                <div className="boundary">
                    
                </div>
                <div>
                    <img className="image"src="images/Ujjawal.png" />
                </div>
                
            </div>

            <div className="scrolling"> 
                Scroll to know more
            </div>
        </div>
    </div>
  );
}

export default Banner;