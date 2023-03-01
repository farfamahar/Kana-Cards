import React, { useState } from "react";
import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";

export default function useCharacters({ initialCharacterArray }) {
  const [characterArray, setCharacterArray] = useState(initialCharacterArray);
  const [isHiraganaChart, setIsHiraganaChart] = useState(true);

  function toggleCharacterInArray(kana) {
    // Check if the character is already in the array
    const index = characterArray.findIndex((c) => c.kana === kana.kana);

    if (index === -1) {
      // If the character is not in the array, add it
      setCharacterArray((prev) => [...prev, kana]);
    } else {
      // If the character is in the array, remove it
      setCharacterArray((prev) => prev.filter((c) => c.kana !== kana.kana));
    }
  }

  const currentChart = isHiraganaChart ? hiragana : katakana;

  const chart = currentChart.map((kana) => {
    const isSelected = characterArray.some((c) => c.kana === kana.kana);
    const className = `text-2xl cursor-pointer ${
      isSelected ? "underline decoration-blue-500 decoration-4" : ""
    }`;

    return (
      <p
        className={className}
        key={kana.kana}
        onClick={() => {
          toggleCharacterInArray(kana);
        }}
      >
        {kana.kana}
      </p>
    );
  });

  return {
    characterArray,
    chart,
    isHiraganaChart,
    setIsHiraganaChart,
  };
}
