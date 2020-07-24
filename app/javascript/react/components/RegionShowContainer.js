import React, { useState, useEffect } from "react";
import FlavorTile from "./FlavorTile";

const RegionShowContainer = (props) => {
  const [getFlavors, setFlavors] = useState([]);
  
  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/regions/${id}`)
      .then((response) => {
        debugger;
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
        setFlavors(flavorList);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const listFlavors = getFlavors.map((flavor) => {
    return <FlavorTile key={flavor.id} region={flavor.region} name={flavor.name} />;
  });

  return <div>{listFlavors}</div>;
};

export default RegionShowContainer;
