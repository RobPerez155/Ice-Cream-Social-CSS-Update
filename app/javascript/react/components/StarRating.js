import React from "react";

const StarRating = (props) => {
  const { rating, handleInputChange } = props;

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="1"
            value="1"
            className="form-check-input"
            onChange={handleInputChange}
          />
          1
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="2"
            value="2"
            className="form-check-input"
            onChange={handleInputChange}
          />
          2
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="3"
            value="3"
            className="form-check-input"
            onChange={handleInputChange}
          />
          3
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="4"
            value="4"
            className="form-check-input"
            onChange={handleInputChange}
          />
          4
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="5"
            value="5"
            className="form-check-input"
            onChange={handleInputChange}
          />
          5
        </label>
      </div>
    </div>
  );
};

export default StarRating;
