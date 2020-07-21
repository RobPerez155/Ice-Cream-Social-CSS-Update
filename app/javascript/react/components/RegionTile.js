import React from "react";
import { Link } from "react-router-dom";

const RegionTile = (props) => {
  return (
    <Link to={`/regions/${props.name}`}>
      <p>{props.name}</p>
    </Link>
  );
};

export default RegionTile;
