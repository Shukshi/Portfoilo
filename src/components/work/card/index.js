import React from 'react';
import classNames from './card.module.css';

function Card(props) {
    const { heading,date, content, imageUrl, buttonText, buttonLink} = props;
  return (
    <div className={classNames.container}>
        <div className={classNames.innerContainer}>
            <div className={classNames.textContainer}>
                <div className={classNames.headingContainer}>
                    {heading}
                </div>
                <div className={classNames.date}>
                    {date}
                </div>
                <div className={classNames.content}>
                    {content}
                </div>
                <div className={classNames.button}>
                    <a href={buttonLink} className={classNames.buttonContent} target= "_blank">
                        {buttonText}
                    </a>
                </div>
            </div>
            <div className={classNames.innerContainer}>
                <img className={classNames.image} src={imageUrl} />
            </div>
        </div>
    </div>
  );
}

export default Card;