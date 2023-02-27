/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

/* Renders the top portion of the card in Learn Mode. 
Contains the current Kana and audio button */
export default function LearnModeHeader({ kana, current }) {
  return (
    <header className="p-6 mb-4">
      <div className="text-8xl font-bold">{kana[current].kana}</div>
      <audio id="audio" src={kana[current].audio}>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </header>
  );
}

LearnModeHeader.propTypes = {
  kana: PropTypes.shape({
    romanji: PropTypes.string,
    kana: PropTypes.string,
    iamge: PropTypes.string,
    audio: PropTypes.string,
  }),
  current: PropTypes.number.isRequired,
};
