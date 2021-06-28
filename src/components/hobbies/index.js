import React from 'react';
import ReactDOM from "react-dom";
import classNames from './hobbies.module.css';

function Hobbies() {
  const hobbies = [
    {
      imageUrl: 'images/hobbies/singing.svg',
      content: 'I love to sing in live shows'
    },
    {
      imageUrl: 'images/hobbies/guitar.svg',
      content: 'I am a noob guitarist'
    },
    {
      imageUrl: 'images/hobbies/food.svg',
      content: 'I am a foodie'
    },
    {
      imageUrl: 'images/hobbies/travelling.svg',
      content: 'I love to travel new places'
    }
  ]
  return (
      <div className = {classNames.container}>
        <div className={classNames.innerContainer}> 
          <div className = {classNames.heading}>
            Hobbies
            <div className = {classNames.underline}> </div>
          </div> 
          
          <div className = {classNames.hobbyContainer}>
            {hobbies.map(hobby => (
              <div key={hobby.name} className={classNames.hobby} >
                <div className = {classNames.image}> 
                  <img src = {hobby.imageUrl} />
               </div>
               <div className = {classNames.textbox}>
                  {hobby.content}
                </div>
             </div>
           ))}
         </div>
        </div>
    </div> 
  );
}

export default Hobbies;