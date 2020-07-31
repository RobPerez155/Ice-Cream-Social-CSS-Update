import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StarRating } from "@thumbtack/thumbprint-react";

const ReviewForm = (props) => {

  let flavorId = props.match.params.flavor_id

  // These 4 states hold hover values for each review attribute
  const [overallHoverRating, setOverallHoverRating] = useState(undefined);
  const [sweetnessHoverRating, setSweetnessHoverRating] = useState(undefined);
  const [mouthFeelHoverRating, setMouthFeelHoverRating] = useState(undefined);
  const [tasteHoverRating, setTasteHoverRating] = useState(undefined);

  const [reviewData, setReviewData] = useState({
      overall: null,
      sweetness: null,
      mouth_feel: null,
      taste: null,
      comment: "",
      manufacturer: ""
  })

  const handleStarChange = (value, ratingName) => {
    setReviewData({
      ...reviewData,
      [ratingName]: value,
    });
  }

  const [getNotice, setNotice] = useState("")

  const handleTextInputChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.currentTarget.name]: event.currentTarget.value,
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
    <div className="body">
      <h3>Submit a New Review</h3>
      <div className="error-notice" >
        {getNotice} <br/>
      </div>
      <div className="review-form">
        <form onSubmit={handleSubmit} id="reviewForm">
        <div className="rating">Overall</div>
          <StarRating
            size="large"
            name="overall"
            rating={reviewData.overall}
            hoverRating={overallHoverRating}
            onStarClick={(value) => {
              handleStarChange(value, "overall")
            }}
            value={reviewData.overall}
            onStarHover={(value) => {
              setOverallHoverRating(value);
            }}
            onMouseLeave={() => {
              setOverallHoverRating(undefined);
            }}
          />

        <div className="rating">Sweetness</div>
          <StarRating
            size="large"
            name="sweetness"
            rating={reviewData.sweetness}
            hoverRating={sweetnessHoverRating}
            onStarClick={(value) => {
              handleStarChange(value, "sweetness")
            }}
            onStarHover={(value) => {
              setSweetnessHoverRating(value);
            }}
            onMouseLeave={() => {
              setSweetnessHoverRating(undefined);
            }}
          />

        <div className="rating">Mouth Feel</div>
          <StarRating
            size="large"
            name="overall"
            rating={reviewData.mouth_feel}
            hoverRating={mouthFeelHoverRating}
            onStarClick={(value) => {
              handleStarChange(value, "mouth_feel")
            }}
            onStarHover={(value) => {
              setMouthFeelHoverRating(value);
            }}
            onMouseLeave={() => {
              setMouthFeelHoverRating(undefined);
            }}
          />

          <div className="rating">Taste</div>
          <StarRating
            size="large"
            name="taste"
            rating={reviewData.taste}
            hoverRating={tasteHoverRating}
            onStarClick={(value) => {
              handleStarChange(value, "taste")
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
          <label>
            Brand (required):
            <textarea
              name="manufacturer"
              onChange={handleTextInputChange}
              value={reviewData.manufacturer}
            />
          </label>

          <button type="submit" class="button primary" value="Submit" form="reviewForm">Submit Form</button>
        </form>

        <div>
          <Link to={{
            pathname:`/flavors/${flavorId}`,
          }} class="button primary">
            Return to Flavor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;