import React, { useState, useEffect } from "react";
import { StarRating } from "@thumbtack/thumbprint-react";

const ReviewForm = () => {

  const [overallRating, setOverallRating] = useState(null);
  const [sweetnessRating, setSweetnessRating] = useState(null);
  const [mouthFeelRating, setMouthFeelRating] = useState(null);
  const [tasteRating, setTasteRating] = useState(null);

  const [hoverRating, setHoverRating] = useState(undefined);

  const [reviewData, setReviewData] = useState({
      overall: null,
      sweetness: null,
      mouth_feel: null,
      taste: null,
      comment: "",
      manufacturer: "",
      flavor_id: 1,
      user_id: 1,
  })

  const handleTextInputChange = (event) => {
    console.log(event.currentTarget);
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
    fetch("/api/v1/reviews", {
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
      .then(body => body)
      .catch(error => console.error(`Error in fetch: ${error.message}`))
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
      <form onSubmit={handleSubmit} id="reviewForm">
        <h5>Overall</h5>
        <StarRating
          size="large"
          name="overall"
          rating={overallRating}
          // exampleOnChange={event => setName(event.target.value)}

          // onClick={event => {debugger
          //   setReviewData({...reviewData,
          //   [event.currentTarget.name]: event.currentTarget.value})}}

          // onClick= {event => 
          //   console.log(event.currentTarget)
          //   setReviewData({
          //     ...reviewData,
          //     [event.currentTarget.name]: event.currentTarget.value,
          //   })
          // }
          // onChange={handleInputChange}
          // onChange={event => setName(event.target.value)
          // hoverRating={hoverRating}

          onStarClick={(value) => {
            setOverallRating(value)
            console.log(`StarRating: Clicked overall rating ${value}`)
          }}

          value={reviewData.overall}
          
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
            setSweetnessRating(value)
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
            onChange={handleTextInputChange}
            value={reviewData.comment}
          />
        </label>

        <br />

        <label>
          Brand:
          <textarea
            name="manufacturer"
            onChange={handleTextInputChange}
            value={reviewData.manufacturer}
          />
        </label>

        <button type="clear" onClick={clear} className="btn">X</button>
          <br />
          <br />
        <button type="submit" value="Submit" form="reviewForm" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
