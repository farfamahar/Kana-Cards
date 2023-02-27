import React, { useState } from "react";
import PropTypes from "prop-types";

//Renders the WaniKani Mnemonic image contained in the kana array
export default function KanaMnemonic({ kana, current }) {
  const [scaleUpImage, setScaleUpImage] = useState(false);

  function handleScale() {
    setScaleUpImage((prev) => !prev);
  }

  return (
    <div className="text-3xl font-bold mb-2">
      <img
        width="325px"
        height="335px"
        className={
          scaleUpImage
            ? "transition scale-125 cursor-pointer"
            : "transition scale-75 cursor-pointer"
        }
        src={kana[current].image}
        onClick={handleScale}
      />
    </div>
  );
}

KanaMnemonic.propTypes = {
  kana: PropTypes.shape({
    romanji: PropTypes.string,
    kana: PropTypes.string,
    iamge: PropTypes.string,
    audio: PropTypes.string,
  }),
  current: PropTypes.number.isRequired,
};
