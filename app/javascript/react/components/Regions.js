import React, { useState, useEffect } from "react";
import RegionTile from "./RegionTile";

const Regions = (props) => {
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
        setRegions(regionList);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const listRegions = getRegions.map((region) => {
    return <RegionTile key={region.name} name={region.name} />;
  });

  return <div>{listRegions}</div>;
};

export default Regions;