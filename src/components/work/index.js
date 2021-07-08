import React from 'react';
import classNames from './work.module.css';
import Card from './card';
function Work() {
    const workExp = [
        {
            heading: 'Designing Customer Management Dashboard @ Bikayi',
            date: 'January 2021-April 2021  •  Internship Project ',
            content: 'My major project was to design a Customer Management Dashboard to provide some special customized features for its premium plan merchants and to meet some other use cases.',
            imageUrl: 'images/work/bikayi.svg',
            buttonText: 'Read Now',
        },

        {
            heading: 'Coursera Redesign: A UX Case Study',
            date: 'July 2020-August 2020  •  Concept Project',
            content: 'In this case study, I am going to share insights on my design process and the design decisions I made while redesigning the Coursera mobile app.',
            imageUrl: 'images/work/coursera.svg',
            buttonText: 'Read on Medium',
        },

        {
            heading: 'Introducing Swiggy Share',
            date: 'October 2020  •  Sprint Case Study',
            content: 'My major project was to design a Customer Management Dashboard to provide some special customized features for its premium plan merchants and to meet some other use cases',
            imageUrl: 'images/work/swiggy.svg',
            buttonText: 'Read on Medium',
        },


        {
            heading: 'Designing MVP app and website @ Flyzy',
            date: 'September 2020-February 2021  •  Internship Project ',
            content: 'My major project was to design a Customer Management Dashboard to provide some special customized features for its premium plan merchants and to meet some other use cases.',
            imageUrl: 'images/work/flyzy.png',
            buttonText: 'View on Behance',
        },

        {
            heading: 'Travella: Trip Planner App-UI/UX Case Study',
            date: 'February 2020-May 2020  •  Concept Project',
            content: 'My major project was to design a Customer Management Dashboard to provide some special customized features for its premium plan merchants and to meet some other use cases.',
            imageUrl: 'images/work/travella.svg',
            buttonText: 'View on Behance',
        },
    ];
    const element = (
       <React.Fragment>
          {workExp.map(work => (
            <div key={work.name}>
              <Card
                heading={work.heading}
                date={work.date}
                content={work.content}
                imageUrl = {work.imageUrl}
                buttonText = {work.buttonText}
              />
            </div>
          ))}
        </React.Fragment> 
      );
  return (
    <div className={classNames.container}>
      <div className={classNames.innerContainer}> 
        <div className={classNames.heading}>
            Work
            <div className = {classNames.underline}> </div>
        </div>
        <div className={classNames.cardContainer}> 
          <div className={classNames.card}> 
            {element}
           </div>
        </div> 
      </div>
    </div>
  );
}

export default Work;