import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span style={{ color }}>
        {value >= 1 ? (
          <StarIcon />
        ) : value >= 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
        {value >= 2 ? (
          <StarIcon />
        ) : value >= 1.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
        {value >= 3 ? (
          <StarIcon />
        ) : value >= 2.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
        {value >= 4 ? (
          <StarIcon />
        ) : value >= 3.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
        {value >= 5 ? (
          <StarIcon />
        ) : value >= 4.5 ? (
          <StarHalfIcon />
        ) : (
          <StarBorderIcon />
        )}
      </span>
      <span className="rating__span">{text && text}</span>
      {/* If there is a text then show it */}
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

// Additional
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
