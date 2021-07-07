import React from 'react';
import classNames from './home-banner.module.css';
function HomeBanner() {
  return (
    <React.Fragment>
        
        <div className={classNames.container}>
            <div className={classNames.innerContainer}>
                <div className={classNames.wrapperContainer}> 
                    <div className={classNames.textbox}>
                        <div className={classNames.textbox1}>
                            Hello,
                        </div>
                        <div className={classNames.textbox2}>
                            I’m <span className={classNames.name}>Ujjawal Garg </span>👋 
                        </div>
                        <div className={classNames.textbox3}>
                            and I simplify digital experience for people
                        </div>
                    </div>
                    <div classNames={classNames.imageContainer}>
                        <div className={classNames.yellow}></div>
                        <div className={classNames.purple}> </div>
                        <div> 
                            <img className={classNames.image} src="images/home-ujjawal.png" />
                        </div>
                    </div>
                </div>
                {/* <div className={classNames.scrolling}> 
                    Scroll to know <span className={classNames.underline}> <span className={classNames.knowmore}> more </span> </span>
                </div>
                 */}
            </div>
            
            <div className={classNames.background}> </div>
        </div>
        
   </React.Fragment>
  );
}

export default HomeBanner;