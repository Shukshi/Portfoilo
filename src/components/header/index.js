import React from 'react';
import "./header.css";
function Header() {
  return (
    <div className="header"> 
        <div className="name"> 
          Ujjawal Garg
        </div>

        <div className="options">
          <div className="work"> 
            Work 
          </div>
          <div className="about"> 
            About
          </div>
          <div className="resume"> 
            Resume
          </div>
          <div className="slider">
            Slider
          </div>
        </div> 
    </div>
  );
}

export default Header;