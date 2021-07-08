import React from 'react';
import ReactDOM from "react-dom";
import classNames from './card.module.css';

function Card(props) {
    const { logoUrl, date, title, content, height, width, marginTop, marginBottom } = props;
  return (
    <div className={classNames.experiencecontainer}>
       <div className={classNames.CardContainer}>
           <div className={classNames.testimonialContainer}> 
                <div className={classNames.topContent}>
                    <div className={classNames.logo}> 
                        <img height={height} width = {width} margin-top={marginTop} margin-bottom={marginBottom} src={logoUrl} />
                    </div>
                    <div className={classNames.date}> 
                        {date}
                    </div>
                </div>
                <div className={classNames.bottomContent}>
                    <div className={classNames.title}>
                        {title}
                    </div>
                    <div className={classNames.content}>
                         {content}
                    </div>
                </div>
                
           </div>
           
        </div> 
    </div>
  );
}

export default Card;