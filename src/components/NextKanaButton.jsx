import React from "react";
import PropTypes from "prop-types";

//Renders a button that iterates to the next or prev Kana in the array onClick
export default function NextKanaButton({ setPrevKana, setNextKana }) {
  return (
    <div className="mb-3 max-w-max m-auto whitespace-nowrap">
      <button
        className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ...  text-white font-bold py-2 px-4 rounded m-4"
        onClick={setPrevKana}
      >
        Prev
      </button>
      <button
        className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ...  text-white font-bold py-2 px-4 rounded m-4"
        onClick={setNextKana}
      >
        Next
      </button>
    </div>
  );
}

NextKanaButton.propTypes = {
  setPrevKana: PropTypes.func.isRequired,
  setNextKana: PropTypes.func.isRequired,
};
