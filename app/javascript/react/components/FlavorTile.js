import React from "react";
import { Link } from "react-router-dom";

const FlavorTile = (props) => {
  const { name, flavorId, regionId } = props;
  return (
    <Link to={`/regions/${regionId}/flavors/${flavorId}`}>{name}</Link>
  );
};

export default FlavorTile;