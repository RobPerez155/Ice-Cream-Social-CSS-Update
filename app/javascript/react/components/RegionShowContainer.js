import React, { useState, useEffect } from "react";
import FlavorTile from "./FlavorTile";

const RegionShowContainer = (props) => {
  const [getFlavors, setFlavors] = useState([]);
  const [getRegionName, setRegionName] = useState(null);

  useEffect(() => {
    let regionId = props.match.params.id;
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
        setRegionName(flavorList.region.name);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const listFlavors = getFlavors.map((flavor) => {
    return (
      <FlavorTile
        key={flavor.id}
        name={flavor.name}
        flavorId={flavor.id}
        image_url={flavor.image_url}
      />
    );
  });

  return (
    <div>
      <h3>{getRegionName}</h3>
        <div>
          <div className="grid-container">
            <div className="grid-x grid-margin-x small-up-4 medium-up-4">
              {listFlavors}
            </div>
          </div>
        </div>
    </div>
  );
};

export default RegionShowContainer;
