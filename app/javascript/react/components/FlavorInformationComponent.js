import React from "react";

const FlavorInformationComponent = ({ name, description, image_url }) => {
  return (
    <>
      <div
        className="
        grid-x grid-padding-x 
        align-center 
        cell small-4 
        basic-card-content 
        basic-card-image 
        display-image"
      >
        <img src={image_url} />
      </div>
      <div
        className="
        basic-card-content        
        callout secondary
        title"
      >
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};

export default FlavorInformationComponent;
