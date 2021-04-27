import React from "react";

const ReviewTile = ({ reviewData }) => {
  return (
    <tr>
      <td width="200">{reviewData.username}</td>
      <td width="1000">{reviewData.comment}</td>
      <td>{reviewData.overall}</td>
      <td className="blue">
        <button type="button" className="button">
          Edit
        </button>
      </td>
      <td>
        <button type="button" className="alert button">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReviewTile;