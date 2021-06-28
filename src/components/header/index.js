import React from 'react';
import classNames from "./header.module.css";
function Header() {
  return (
    <div className={classNames.header}> 
        <div className={classNames.name}> 
          Ujjawal Garg
        </div>

        <div className={classNames.options}>
          <div className={classNames.work}> 
            Work 
          </div>
          <div className={classNames.about}> 
            About
          </div>
          <div className={classNames.resume}> 
            Resume
          </div>
          <div className={classNames.slider}>
            Slider
          </div>
        </div> 
    </div>
  );
}

export default Header;