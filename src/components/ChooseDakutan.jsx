import React from "react";
import PropTypes from "prop-types";

//Renders checkbox to determine if quiz should contain modified kana
export default function ChooseDakutan({ handleDakutan }) {
  return (
    <div className="flex items-center mb-2 mt-4">
      <input
        id="dakutan-checkbox"
        type="checkbox"
        onChange={handleDakutan}
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      <label
        htmlFor="dakutan-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        Add dakuten and handakuon
      </label>
    </div>
  );
}

ChooseDakutan.propTypes = {
  handleDakutan: PropTypes.func.isRequired,
};
