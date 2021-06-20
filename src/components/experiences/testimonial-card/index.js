import React from 'react';
import ReactDOM from "react-dom";
import './testimonial-card.css';

function TestimonialCard(props) {
    const { logoUrl, date, title, content } = props;
  return (
    <div className='container'>
       <div className='innerContainer'>
           <div > 
              <img src={logoUrl} />
           </div>
           <div> 
               {date}
           </div>
           <div>
               {title}
           </div>
           <div>
               {content}
           </div>
        </div> 
    </div>
  );
}

export default TestimonialCard;