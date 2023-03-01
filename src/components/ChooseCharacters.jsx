import React, { useState } from "react";
import { hiragana } from "../data/hiragana";
import PropTypes from "prop-types";

export default function ChooseCharacters({closeCharacterModal}) {
  let [characterArray, setCharacterArray] = useState([]);

  function toggleCharacterInArray(kana) {
    // Check if the character is already in the array
    const index = characterArray.findIndex((c) => c.kana === kana.kana);

    if (index === -1) {
      // If the character is not in the array, add it
      setCharacterArray((prev) => [...prev, kana]);
    } else {
      // If the character is in the array, remove it
      setCharacterArray((prev) =>
        prev.filter((c) => c.kana !== kana.kana)
      );
    }
  }

  console.log(characterArray);

  let hirganaChart = hiragana.map((kana) => {
    const [isSelected, setIsSelected] = useState(false);
    const className = `text-2xl cursor-pointer ${isSelected ? "underline decoration-sky-500 decoration-4" : ""}`;

    return (
      <p
        className={className}
        key={kana.kana}
        onClick={() => {
          toggleCharacterInArray(kana);
          setIsSelected(!isSelected); // Toggle the state variable when the element is clicked
        }}
      >
        {kana.kana}
      </p>
    );
  });

  return (
    <>
    <div data-aos="slide-up" className=" min-h-screen centerFlex mobile-card justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-non">
      <div className="text-black max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pt-16 pr-16 pl-16 pb-8">
        <div className="grid grid-cols-5 grid-rows-10 gap-6 gap-x-12">
          {hirganaChart}
        </div>
        <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b p-4">
              <button
                className="text-green-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
                data-testid="close-credits-button"
                onClick={() => closeCharacterModal(characterArray)}
              >
                Confirm
              </button>
            </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

ChooseCharacters.propTypes = {
    closeCharacterModal: PropTypes.func.isRequired,
  };
