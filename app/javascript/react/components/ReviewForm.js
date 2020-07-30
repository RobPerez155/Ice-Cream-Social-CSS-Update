import React, { useState, useEffect } from "react";
import { StarRating } from "@thumbtack/thumbprint-react";

const ReviewForm = (props) => {

  let flavorId = props.match.params.flavor_id

  // These 4 states hold each of our star ratings for review attributes
  const [overallRating, setOverallRating] = useState(null);
  const [sweetnessRating, setSweetnessRating] = useState(null);
  const [mouthFeelRating, setMouthFeelRating] = useState(null);
  const [tasteRating, setTasteRating] = useState(null);

  // These 4 states hold hover values for each review attribute
  const [overallHoverRating, setOverallHoverRating] = useState(undefined);
  const [sweetnessHoverRating, setSweetnessHoverRating] = useState(undefined);
  const [mouthFeelHoverRating, setMouthFeelHoverRating] = useState(undefined);
  const [tasteHoverRating, setTasteHoverRating] = useState(undefined);

  // This complex state holds all other review attributes and receives the state from star ratings attributes before submission
  const [reviewData, setReviewData] = useState({
      overall: null,
      sweetness: null,
      mouth_feel: null,
      taste: null,
      comment: "",
      manufacturer: ""
  })

  const [getNotice, setNotice] = useState("")

  const handleTextInputChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.currentTarget.name]: event.currentTarget.value,
      overall: overallRating,
      sweetness: sweetnessRating,
      mouth_feel: mouthFeelRating,
      taste: tasteRating,
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    fetch(`/api/v1/flavors/${flavorId}/reviews`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(reviewData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setNotice(body.notice)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  };

  return (
    <div>
      {getNotice} <br/>
      <form onSubmit={handleSubmit} id="reviewForm">
        <h5>Overall</h5>
        <StarRating
          size="large"
          name="overall"
          rating={overallRating}
          hoverRating={overallHoverRating}
          onStarClick={(value) => {
            setOverallRating(value)
          }}
          value={reviewData.overall}
          onStarHover={(value) => {
            setOverallHoverRating(value);
          }}
          onMouseLeave={() => {
            setOverallHoverRating(undefined);
          }}
        />

        <h5>Sweetness</h5>
        <StarRating
          size="large"
          name="overall"
          rating={sweetnessRating}
          hoverRating={sweetnessHoverRating}
          onStarClick={(value) => {
            setSweetnessRating(value)
          }}
          onStarHover={(value) => {
            setSweetnessHoverRating(value);
          }}
          onMouseLeave={() => {
            setSweetnessHoverRating(undefined);
          }}
        />

        <h5>Mouth Feel</h5>
        <StarRating
          size="large"
          name="overall"
          rating={mouthFeelRating}
          hoverRating={mouthFeelHoverRating}
          onStarClick={(value) => {
            setMouthFeelRating(value);
          }}
          onStarHover={(value) => {
            setMouthFeelHoverRating(value);
          }}
          onMouseLeave={() => {
            setMouthFeelHoverRating(undefined);
          }}
        />

        <h5>Taste</h5>
        <StarRating
          size="large"
          name="overall"
          rating={tasteRating}
          hoverRating={tasteHoverRating}
          onStarClick={(value) => {
            setTasteRating(value);
          }}
          onStarHover={(value) => {
            setTasteHoverRating(value);
          }}
          onMouseLeave={() => {
            setTasteHoverRating(undefined);
          }}
        />

        <label>
          Comment (optional):
          <textarea
            name="comment"
            onChange={handleTextInputChange}
            value={reviewData.comment}
          />
        </label>

        <br />

        <label>
          Brand (required):
          <textarea
            name="manufacturer"
            onChange={handleTextInputChange}
            value={reviewData.manufacturer}
          />
        </label>

        <button type="submit" value="Submit" form="reviewForm">Submit Form</button>
      </form>
    </div>
  );
};

export default ReviewForm;


<input type="submit" value="Submit" />