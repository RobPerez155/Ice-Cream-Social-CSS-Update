import React from "react";
import { Link } from "react-router-dom";

const FlavorTile = ({ name, flavorId, image_url }) => {
  return (
    <div className="cell">
      <div className="card">
        <img src={image_url} />
        <div className="card-section">
          <Link to={`/flavors/${flavorId}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
};

export default FlavorTile;
