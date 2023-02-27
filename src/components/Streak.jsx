import React from "react";
import PropTypes from "prop-types";

export default function Streak({ streak }) {
  return (
    <div className="flex justify-center mb-3 ">
      <p data-aos="fade-up" className="text-green-600 text-lg text-center">
        {" "}
        {streak > 0 && streak % 5 == 0
          ? `${streak} in a row!`
          : "Correct!"}{" "}
      </p>
    </div>
  );
}
Streak.propTypes = {
  streak: PropTypes.number,
};
