import React from "react";

const FlavorInformationComponent = ({ name, description, image_url }) => {
  return (
    <>
      <div class="grid-x grid-padding-x align-center">
        <div class="cell small-4">
          <div class="basic-card-content">
            <div class="basic-card-image display-image">
              <img src={image_url} />
            </div>
          </div>
        </div>
      </div>
      <div class="basic-card-content content callout secondary">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};

export default FlavorInformationComponent;
