import React from "react";
import PropTypes from "prop-types";


//Renders two buttons choose which type of learn mode to take (Hiragana or Katakana)
export default function ChooseLearnMode({handleLearnChoice}) {
  return (
    <div className=" w-max">
      <h1 className="text-1xl font-bold uppercase mt-5 mb-3 text-black">
        {" "}
        Learn
      </h1>
      <button
        className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => handleLearnChoice("hiragana")}
      >
        {" "}
        Hiragana
      </button>
      <button
        className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4 cursor-pointer"
        onClick={() => handleLearnChoice("katakana")}
      >
        {" "}
        Katakana
      </button>
    </div>
  );
}

ChooseLearnMode.propTypes = {
    handleLearnChoice: PropTypes.func.isRequired,
  };
