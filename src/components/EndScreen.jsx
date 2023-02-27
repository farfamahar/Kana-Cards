import React from "react";
import Confetti from "react-confetti";
import PropTypes from "prop-types";

/* Renders the final screen containing score after completing quiz. 
On perfect score, confetti is rendered */
export default function EndScreen({ correct, kanaLength }) {
  return (
    <div className="m-10 p-10 max-w-md rounded shadow-lg bg-white mobile-card">
      <div className="p-8">
        <h1 className="text-2xl font-bold uppercase mb-3 text-center ">
          {" "}
          Final Score{" "}
        </h1>
        <p className="text-1xl text-center">
          {correct} out of {kanaLength}
        </p>
        <p className="text-center text-5xl font-bold uppercase m-6 p-4">
          {" "}
          {correct == 46 || correct == 71 ? "🎉🎉🎉" : ""}{" "}
        </p>
        {correct == 46 || correct == 71 ? (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            gravity={0.1}
          />
        ) : (
          ""
        )}
        <form className="flex justify-center mt-4">
          <button
            className="text-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4"
            type="submit"
          >
            {" "}
            Return
          </button>
        </form>
      </div>
    </div>
  );
}

EndScreen.propTypes = {
  kana: PropTypes.shape({
    romanji: PropTypes.string,
    kana: PropTypes.string,
    iamge: PropTypes.string,
    audio: PropTypes.string,
  }),
  correct: PropTypes.number.isRequired,
  kanaLength: PropTypes.number,
};
