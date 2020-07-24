import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";

const ReviewForm = () => {
  const [review, setReview] = useState({
    overall: null,
    sweetness: null,
    mouth_feel: null,
    taste: null,
    comment: "",
    manufacturer: "",
  });

  const handleInputChange = (event) => {
    setReview({
      ...review,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
  };

  const clear = () => {
    event.preventDefault();
    setReview({
      overall: null,
      sweetness: null,
      mouth_feel: null,
      taste: null,
      comment: "",
      manufacturer: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Overall</h5>
        <StarRating rating={review} handleInputChange={handleInputChange} />

        <h5>Sweetness</h5>
        <StarRating rating={review} handleInputChange={handleInputChange} />

        <h5>Mouth Feel</h5>
        <StarRating rating={review} handleInputChange={handleInputChange} />

        <h5>Taste</h5>
        <StarRating rating={review} handleInputChange={handleInputChange} />

        <label>
          Comment:
          <textarea
            name="comment"
            onChange={handleInputChange}
            value={review.comment}
          />
        </label>

        <br />

        <label>
          Brand:
          <textarea
            name="manufacturer"
            onChange={handleInputChange}
            value={review.manufacturer}
          />
        </label>

        <button type="clear" value="X" onClick={clear} />

        <button type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReviewForm;
