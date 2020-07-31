import React from "react";
import { Link } from "react-router-dom";

const FlavorTile = ({ name, flavorId, image_url }) => {
  return (
    <div className="flavor-tile-cell">
      <img src={image_url} />
      <div className="name">
        <Link to={`/flavors/${flavorId}`}>{name}</Link>
      </div>
    </div>

  );
};

export default FlavorTile;
