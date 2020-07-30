import React from "react";

const ReviewTile = ({ reviewData }) => {
  return (
    <ul>
      <li>{reviewData.username}</li>
      <li>{reviewData.overall}</li>
      <li>{reviewData.comment}</li>
    </ul>
  );
};

export default ReviewTile;