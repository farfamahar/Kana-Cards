import React from "react";
import PropTypes from "prop-types";


//Renders two buttons choose which type of quiz to take (Hiragana or Katakana)
export default function ChooseQuizMode({handleHiragana, handleKatakana, handleCustom}) {
  return (
    <div className="flex items-center mb-4 mt-4">
      <input
        id="hiragana-checkbox"
        type="checkbox"
        onChange={handleHiragana}
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      <label
        htmlFor="hiragana-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        Hiragana
      </label>

      <input
        id="katakana-checkbox"
        type="checkbox"
        onChange={handleKatakana}
        value=""
        className="w-4 h-4 ml-8 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      
      <label
        htmlFor="katakana-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        Katakana
      </label>

      <input
        id="custom-checkbox"
        type="checkbox"
        onChange={handleCustom}
        value="custom-checkbox"
        className="w-4 h-4 ml-8 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      
      <label
        htmlFor="custom-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        Custom
      </label>
    </div>
  );
}

ChooseQuizMode.propTypes = {
  handleHiragana: PropTypes.func.isRequired,
  handleKatakana: PropTypes.func.isRequired,
  handleCustom: PropTypes.func.isRequired,

};
