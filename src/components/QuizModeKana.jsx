import React from "react";
import PropTypes from "prop-types";

//Renders the kana that appears in the middle of the card in quiz mode
export default function QuizModeKana({
  pause,
  isCorrect,
  mystyle,
  kana,
  current,
}) {
  return (
    <div
      className={
        pause && isCorrect
          ? "transition-colors text-green-500 text-9xl font-bold mb-8	"
          : "text-9xl font-bold mb-8"
      }
    >
      <h1 style={mystyle}>{kana[current].kana}</h1>
    </div>
  );
}

QuizModeKana.propTypes = {
  pause: PropTypes.bool,
  isCorrect: PropTypes.bool,
  mystyle: PropTypes.shape({
    fontFamily: PropTypes.string,
  }),
  kana: PropTypes.shape({
    romanji: PropTypes.string,
    kana: PropTypes.string,
    iamge: PropTypes.string,
    audio: PropTypes.string,
  }),
  current: PropTypes.number,
};
