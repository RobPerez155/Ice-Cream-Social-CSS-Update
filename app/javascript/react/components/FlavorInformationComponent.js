import React from "react";

const FlavorInformationComponent = ({ name, description, image_url }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image_url} />
      <p>{description}</p>
    </>
  );
};

export default FlavorInformationComponent;