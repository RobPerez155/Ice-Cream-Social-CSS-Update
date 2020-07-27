import React from "react";
import { Link } from "react-router-dom";

const RegionTile = (props) => {
  const { name } = props;

  return (
    <div>
      <Link to={`/regions/${props.id}`}>{name}</Link>
    </div>
  );
};

export default RegionTile;
