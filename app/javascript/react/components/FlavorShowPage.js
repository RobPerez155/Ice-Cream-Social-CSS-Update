import React, { useState, useEffect } from "react";
import FlavorInformationComponent from "./FlavorInformationComponent";
import ReviewTile from "./ReviewTile";
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
        setReviews(reviews);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let reviewList = getReviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        reviewData={review}
      />
    )
  })

  return (
    <div>
      <FlavorInformationComponent
        name={getFlavorData.name}
        description={getFlavorData.description}
        image_url={getFlavorData.image_url}
      />

      <Link to={{
          pathname:`/flavors/${flavor_id}/reviews/new`,
          reviewProps: {flavor_id}
      }}>
        Submit a new Review
      </Link>
    </div>
  );
};

export default FlavorShowPage;
