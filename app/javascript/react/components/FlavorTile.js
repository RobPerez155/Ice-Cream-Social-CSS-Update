import React from "react";
import { Link } from "react-router-dom";

const FlavorTile = ({ name, flavorId, image_url }) => {
  return (
    <div class="flavor-tile-cell">
      <img src={image_url} />
      <div class="name">
        <Link to={`/flavors/${flavorId}`}>{name}</Link>
      </div>
    </div>

  );
};

export default FlavorTile;
