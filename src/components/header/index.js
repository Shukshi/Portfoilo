import React from 'react';
import {Link} from "react-router-dom";
import classNames from "./header.module.css";
function Header() {
  return (
    <div className={classNames.container}>
        <div className={classNames.name}> 
            Ujjawal Garg
        </div>

        <div className={classNames.options}>
          <div > 
           <Link to="/" className={classNames.work}>Home </Link> 
          </div>
          <div > 
            <Link to="/about" className={classNames.about} >About</Link>
          </div>
          <div className={classNames.resume}> 
            Resume
          </div>
          <label className={classNames.switch}>
            <input type="checkbox" />
            <span className={classNames.slider}></span>
          </label>
        </div> 
        
    </div>
  );
}

export default Header;