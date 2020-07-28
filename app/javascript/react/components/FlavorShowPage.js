import React, { useState, useEffect } from "react";
import FlavorInformationComponent from './FlavorInformationComponent';

const FlavorShowPage = (props) => {
  const [getFlavorData, setFlavorData] = useState({
    name: "",
    description: "",
    image_url: ""
  });

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
        let flavor = body;
        setFlavorData(flavor);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div>
      <FlavorInformationComponent key={getFlavorData.id} name={getFlavorData.name} description={getFlavorData.description} image_url={getFlavorData.image_url}/>
    </div>
  )
};

export default FlavorShowPage;