import React from "react";
import PropTypes from "prop-types";

//Plays the Kana audio file on click
export default function PlaySoundButton({ playSound, volumeIcon }) {
  return (
    <button className="mt-3 scale-150" onClick={playSound}>
      {volumeIcon}
    </button>
  );
}

PlaySoundButton.propTypes = {
  playSound: PropTypes.func.isRequired,
  volumeIcon: PropTypes.element,
};
