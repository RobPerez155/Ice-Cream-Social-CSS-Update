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
      <div className="scroll-border-pink">
        <div className="basic-card">
          <FlavorInformationComponent
            name={getFlavorData.name}
            description={getFlavorData.description}
            image_url={getFlavorData.image_url}
          />
          <table className="hover">
            <thead>
              <tr>
                <div className="table-top">
                <th width="200">Username</th>
                <th width="450">Review</th>
                <th width="200">Rating</th>
                <th width="200"> </th>
                <th width="200"> </th>
              </tr>
            </thead>
          <tbody>
            {reviewList}
          </tbody>
          </table>
        </div>
      </div>

      <Link to={{
          pathname:`/flavors/${flavor_id}/reviews/new`,
          reviewProps: {flavor_id}
      }}>
        New Review
      </Link>
    </div>
  );
};

export default FlavorShowPage;
