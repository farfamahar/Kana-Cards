import React from "react";
import PropTypes from "prop-types";


//Renders two buttons choose which type of quiz to take (Hiragana or Katakana)
export default function ChooseQuizMode({handleHiragana, handleKatakana}) {
  return (
    <div className="flex items-center mb-4 mt-4">
      <input
        id="default-checkbox"
        type="checkbox"
        onChange={handleHiragana}
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        Hiragana
      </label>

      <input
        id="checkbox"
        type="checkbox"
        onChange={handleKatakana}
        value=""
        className="w-4 h-4 ml-8 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      
      <label
        htmlFor="checkbox"
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        Katakana
      </label>

      {/* <input
        id="checkbox"
        type="checkbox"
        onChange={handleKatakana}
        value=""
        className="w-4 h-4 ml-8 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      
      <label
        htmlFor="checkbox"
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        Custom
      </label> */}
    </div>
  );
}

ChooseQuizMode.propTypes = {
  handleHiragana: PropTypes.func.isRequired,
  handleKatakana: PropTypes.func.isRequired,

};
