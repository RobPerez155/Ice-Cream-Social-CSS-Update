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

  const [getReviews, setReviews] = useState([]);

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
    return <ReviewTile key={review.id} reviewData={review} />;
  });

  return (
    <div>
      <div className="scroll-border-pink">
        <div className="basic-card">
          <FlavorInformationComponent
            name={getFlavorData.name}
            description={getFlavorData.description}
            image_url={getFlavorData.image_url}
          />
        </div>
        <div className="review-button">
          <Link
            to={{
              pathname: `/flavors/${flavor_id}/reviews/new`,
              reviewProps: { flavor_id },
            }}
            class="button primary"
          >
            New Review
          </Link>
        </div>
      </div>
      <table class="hover">
        <thead>
          <tr>
            <div class="table-top">
              <th width="200">Username</th>
              <th width="450">Review</th>
            </div>
          </tr>
        </thead>
        <tbody>{reviewList}</tbody>
      </table>
    </div>
  );
};

export default FlavorShowPage;
