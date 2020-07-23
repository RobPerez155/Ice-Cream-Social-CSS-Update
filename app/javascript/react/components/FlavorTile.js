import React from "react";
import { Link } from "react-router-dom";

const FlavorTile = (props) => {
  const { name } = props;
  return (
    <Link to={`/regions/${name}`}>
      <p>{name}</p>
    </Link>
  );
};

export default FlavorTile;