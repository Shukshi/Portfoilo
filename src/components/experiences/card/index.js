import React from 'react';
import ReactDOM from "react-dom";
import './card.css';

function Card(props) {
    const { logoUrl, date, title, content, height, width } = props;
  return (
    <div className='experiencecontainer'>
       <div className='CardContainer'>
           <div className='testimonialContainer'> 
                <div className="topContent">
                    <div className='logo'> 
                        <img height={height} width = {width} src={logoUrl} />
                    </div>
                    <div className="date"> 
                        {date}
                    </div>
                </div>
                <div className="bottomContent">
                    <div className="title">
                        {title}
                    </div>
                    <div className="content">
                         {content}
                    </div>
                </div>
                
           </div>
           
        </div> 
    </div>
  );
}

export default Card;