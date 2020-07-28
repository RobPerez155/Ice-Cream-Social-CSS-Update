import React from "react";
import { Link } from "react-router-dom";

const RegionTile = ({ id, name, image_url }) => {
  return (
    <div className="cell">
      <div className="card">
        <img src={image_url} />
        <div className="card-section">
          <Link to={`/regions/${id}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
};

export default RegionTile;
