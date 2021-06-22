import React from 'react';
import ReactDOM from "react-dom";
import './experiences.css';
import TestimonialCard from './testimonial-card';
function Experiences() {
    const testimonials = [
        {
            logoUrl: 'images/company-logo/pharmeasy.png',
            date: 'May 2021 - present',
            title: 'Product Design Internship',
            content: 'Working with the Customer team regarding Product listings and simplifying the existing experience of the mobile product. ',
            height: '90px',
            width: '150px',
        },

        {
            logoUrl: 'images/company-logo/procol.png',
            date: 'February 2021- May 2021',
            title: 'UX Design Internship',
            content: 'Working on task flows on the SaaS product and also responsible for the agile revamp of the mobile product based on constant feedback to solve the problems faced by the users.',
            height: '150px',
            width: '150px',
        },

        {
            logoUrl: 'images/company-logo/Bikayi.png',
            date: 'October 2020- April 2021',
            title: 'Product Design Internship',
            content: 'Designed the Product website to improve conversion rate, redesigned the web dashboard to be used by primary personas, and also designed user-specific themes to commercialize and promote their online stores.',
            height: '100px',
            width: '150px',
        },

        {
            logoUrl: 'images/company-logo/flyzy.png',
            date: 'August 2020- February 2021',
            title: 'Product Design Internship',
            content: 'My responsibilities included working on the mobile product to work on flows of new features and collaborate with the developers to ship them. Also worken on the revamp of the existing website to generate more leads.',
            height: '150px',
            width: '150px',
        },
    ];
    const element = (
        <React.Fragment>
          {testimonials.map(testimonial => (
            <div key={testimonial.name}>
              <TestimonialCard
                logoUrl={testimonial.logoUrl}
                date={testimonial.date}
                title={testimonial.title}
                content={testimonial.content}
                height = {testimonial.height}
                width={testimonial.width}
              />
            </div>
          ))}
        </React.Fragment>
      );
  return (
    <div className="experienceContainer">
      <div className="experienceInnerContainer"> 
        <div className="experienceHeading">
            Experiences
        </div>
        <div className="cardContainer"> 
          <div className="card"> 
            {element}
           </div>
        </div> 
      </div>
    </div>
  );
}

export default Experiences;