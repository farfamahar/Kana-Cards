import React from "react";
import PropTypes from "prop-types";

//Renders the how many quiz items you've completed
export default function QuizModeHeader({ iterator, kanaLength }) {
  return (
    <header className="p-6 mb-8 ml-16 mr-16">
      <p className="whitespace-nowrap	">
        {" "}
        {iterator} / {kanaLength}
      </p>
    </header>
  );
}

QuizModeHeader.propTypes = {
  iterator: PropTypes.number,
  kanaLength: PropTypes.number,
};
