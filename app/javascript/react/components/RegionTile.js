import React from "react";
import { Link } from "react-router-dom";

const RegionTile = (props) => {
  const { name } = props;
  return (
    <Link to={`/regions/${name}`}>
      <p>{name}</p>
    </Link>
  );
};

export default RegionTile
