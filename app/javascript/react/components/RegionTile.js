import React from "react";
import { Link } from "react-router-dom";

const RegionTile = ({ id, name, image_url }) => {
  return (
    <div className="cell" id="region-tile-container">
      <div className="card">
        <img src={image_url} />
        <div className="card-section test">
          <Link to={`/regions/${id}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
};

export default RegionTile;
