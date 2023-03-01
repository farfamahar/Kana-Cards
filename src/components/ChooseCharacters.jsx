import React from "react";
import useCharacters from "../hooks/useCharacters";

import PropTypes from "prop-types";

export default function ChooseCharacters({
  initialCharacterArray,
  closeCharacterModal,
}) {
  const { characterArray, setIsHiraganaChart, chart, isHiraganaChart } =
    useCharacters({ initialCharacterArray });

  return (
    <>
      <div
        data-aos="slide-up"
        className=" min-h-screen centerFlex mobile-card justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-non"
      >
        <div className="text-black max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pt-16 pr-20 pl-20 pb-8">
          <div className="grid grid-cols-5 grid-rows-10 gap-6 gap-x-12">
            {chart}
          </div>
          <div className="justify-end  border-t border-solid border-slate-200 rounded-b p-4">
            <div className="flex justify-between ">
              <button
                className="background-transparent text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsHiraganaChart(!isHiraganaChart)}
              >
                {isHiraganaChart ? "Show Katakana" : "Show Hiragana"}
              </button>
              <button
                className="text-blue-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
                data-testid="close-credits-button"
                onClick={() => closeCharacterModal(characterArray)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

ChooseCharacters.propTypes = {
  closeCharacterModal: PropTypes.func.isRequired,
  initialCharacterArray: PropTypes.array,
};
