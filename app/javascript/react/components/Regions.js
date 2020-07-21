import React from "react";
import RegionTile from "./RegionTile";

const regions = [
  "North America",
  "South America",
  "Africa",
  "Oceania",
  "Europe",
  "Asia",
];

const listRegions = regions.map((region) => {
  return <RegionTile key={region} name={region} />;
});

const Regions = (props) => {
  return <div>{listRegions}</div>;
};

export default Regions;
