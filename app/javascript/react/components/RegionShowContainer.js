import React, { useState, useEffect } from "react";
import FlavorTile from "./FlavorTile";

const RegionShowContainer = (props) => {
  const [getFlavors, setFlavors] = useState([]);
  const [getRegionId, setRegionId] = useState(null);

  useEffect(() => {
    let regionId = props.match.params.id
    fetch(`/api/v1/regions/${regionId}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        let flavorList = body;
        setFlavors(flavorList.region.flavors);
        setRegionId(regionId);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const listFlavors = getFlavors.map((flavor) => {
    return <FlavorTile key={flavor.id} name={flavor.name} flavorId={flavor.id} regionId={getRegionId}/>;
  });

  return <div>{listFlavors}</div>;
};

export default RegionShowContainer;
