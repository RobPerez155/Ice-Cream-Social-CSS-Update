import React from "react";
import { Link } from "react-router-dom";

const FlavorTile = ({ name, flavorId }) => {
  return (
    <Link to={`/flavors/${flavorId}`}>{name}</Link>
  );
};

export default FlavorTile;