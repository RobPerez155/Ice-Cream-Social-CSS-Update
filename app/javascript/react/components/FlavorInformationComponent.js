import React from "react";

const FlavorInformationComponent = ({ name, description, image_url }) => {
  return (
    <>
      <div className="grid-x grid-padding-x align-center">
        <div className="cell small-4">
          <div className="basic-card-content">
            <div className="basic-card-image display-image">
              <img src={image_url} />
            </div>
          </div>
        </div>
      </div>
      <div className="basic-card-content content callout secondary">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};

export default FlavorInformationComponent;
