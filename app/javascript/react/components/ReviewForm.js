import React, { useState, useEffect } from "react";
import { StarRating } from "@thumbtack/thumbprint-react";

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState({
    comment: "",
    manufacturer: "",
  });

  const [overallRating, setOverallRating] = useState(null);
  const [sweetnessRating, setSweetnessRating] = useState(null);
  const [mouthFeelRating, setMouthFeelRating] = useState(null);
  const [tasteRating, setTasteRating] = useState(null);

  const [hoverRating, setHoverRating] = useState(undefined);

  const handleInputChange = (event) => {
    console.log(event.currentTarget);
    setReviewText({
      ...reviewText,
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
        <StarRating
          size="large"
          name="overall"
          rating={overallRating}
          // hoverRating={hoverRating}
          onStarClick={(value) => {
            setOverallRating(value);
            console.log(`StarRating: Clicked overall rating ${value}`);
          }}
          // onStarHover={(value) => {
          //   setHoverRating(value);
          //   console.log(`StarRating: Hovered over ${value}`);
          // }}
          // onMouseLeave={() => {
          //   setHoverRating(undefined);
          //   console.log("StarRating: onMouseLeave");
          // }}
        />

        <h5>Sweetness</h5>
        <StarRating
          size="large"
          name="overall"
          rating={sweetnessRating}
          // hoverRating={hoverRating}
          onStarClick={(value) => {
            setSweetnessRating(value);
            console.log(`StarRating: Clicked Sweetness rating ${value}`);
          }}
          // onStarHover={(value) => {
          //   setHoverRating(value);
          //   console.log(`StarRating: Hovered over ${value}`);
          // }}
          // onMouseLeave={() => {
          //   setHoverRating(undefined);
          //   console.log("StarRating: onMouseLeave");
          // }}
        />

        <h5>Mouth Feel</h5>
        <StarRating
          size="large"
          name="overall"
          rating={mouthFeelRating}
          // hoverRating={hoverRating}
          onStarClick={(value) => {
            setMouthFeelRating(value);
            console.log(`StarRating: Clicked Mouthfeel rating ${value}`);
          }}
          // onStarHover={(value) => {
          //   setHoverRating(value);
          //   console.log(`StarRating: Hovered over ${value}`);
          // }}
          // onMouseLeave={() => {
          //   setHoverRating(undefined);
          //   console.log("StarRating: onMouseLeave");
          // }}
        />

        <h5>Taste</h5>
        <StarRating
          size="large"
          name="overall"
          rating={tasteRating}
          // hoverRating={hoverRating}
          onStarClick={(value) => {
            setTasteRating(value);
            console.log(`StarRating: Clicked Taste rating ${value}`);
          }}
          // onStarHover={(value) => {
          //   setHoverRating(value);
          //   console.log(`StarRating: Hovered over ${value}`);
          // }}
          // onMouseLeave={() => {
          //   setHoverRating(undefined);
          //   console.log("StarRating: onMouseLeave");
          // }}
        />

        <label>
          Comment:
          <textarea
            name="comment"
            onChange={handleInputChange}
            value={reviewText.comment}
          />
        </label>

        <br />

        <label>
          Brand:
          <textarea
            name="manufacturer"
            onChange={handleInputChange}
            value={reviewText.manufacturer}
          />
        </label>

        <button type="clear" value="X" onClick={clear} />

        <button type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReviewForm;
