import React, { useState, useEffect } from "react";
import RegionTile from "./RegionTile";

const RegionsIndexPage = (props) => {
  const [getRegions, setRegions] = useState([]);
  useEffect(() => {
    fetch("/api/v1/regions")
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
        let regionList = body;
        setRegions(regionList.regions);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const listRegions = getRegions.map((region) => {
    return (
      <RegionTile
        key={region.id}
        name={region.name}
        id={region.id}
        image_url={region.image_url}
      />
    );
  });
  return (
    <>
      <span className="region-index-description">
        <h3>Explore a world of flavors!</h3>
      </span>
      <div className="main-border-pink">
          <div className="grid-container">
            <div className="grid-x grid-margin-x small-up-2 medium-up-3">
              {listRegions}
            </div>
          </div>
      </div>
    </>
  );
};
export default RegionsIndexPage;
