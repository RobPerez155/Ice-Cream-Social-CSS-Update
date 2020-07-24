import React, { useState, useEffect } from "react";

const FlavorShowPage = (props) => {
  const [getFlavors, setFlavors] = useState([]);
  useEffect(() => {
    let region_id = props.match.params.region_id
    let flavor_id = props.match.params.id
    fetch(`/api/v1/regions/${region_id}/flavors/${flavor_id}`)
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
        setFlavors(flavorList);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);
  const listFlavors = getFlavors.map((flavor) => {

    return <FlavorTile key={flavor.name} name={flavor.name} />;
  });

  return <div>{listFlavors}</div>;
};

export default FlavorShowPage;