import React, { useState, useEffect } from "react";
import FlavorInformationComponent from "./FlavorInformationComponent";
import { Link } from "react-router-dom";

const FlavorShowPage = (props) => {
  const [getFlavorData, setFlavorData] = useState({
    name: "",
    description: "",
    image_url: "",
  });

  const [getReviews, setReviews] = useState([])

  let flavor_id = props.match.params.id;

  useEffect(() => {
    fetch(`/api/v1/flavors/${flavor_id}`)
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
        let flavor = body.flavorData;
        let reviews = body.reviewsData;
        setFlavorData(flavor);
        setReviews(reviews)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div>
      <FlavorInformationComponent
        key={getFlavorData.id}
        name={getFlavorData.name}
        description={getFlavorData.description}
        image_url={getFlavorData.image_url}
      />

      <div>
        <Link to={{
          pathname:`/flavors/${flavor_id}/reviews/new`,
          reviewProps: {flavor_id}
      }}>
          Submit a new Review
        </Link>
      </div>
    </div>
  );
};

export default FlavorShowPage;
