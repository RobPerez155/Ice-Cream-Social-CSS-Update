import React from "react";
import { Link } from "react-router-dom";

const FlavorTile = ({ name, flavorId, image_url }) => {
  return (
    <div class="flavor_tile_cell">
      <div class="image_url">
        <img src={image_url} />
      </div>
        <div class="name">
          <Link to={`/flavors/${flavorId}`}>{name}</Link>
        </div>
    </div>
  );
};

export default FlavorTile;
