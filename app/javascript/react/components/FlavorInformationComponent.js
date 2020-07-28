import React from "react";

const FlavorInformationComponent = (props) => {
  const { name, description, image_url } = props;
  return (
    <>
      <h2>{name}</h2>
      <img src={image_url} />
      <p>{description}</p>
    </>
  );
};

export default FlavorInformationComponent;