/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function useMenu() {
  //TODO: Put the top two into one function
  const [startQuiz, setStartQuiz] = useState(false);
  const [learn, setLearn] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [difficulty, setDifficulty] = useState(10);
  const [isDakutan, setIsDakutan] = useState(false);
  const [isHiragana, setIsHiragana] = useState(false);
  const [isKatakana, setIsKatakana] = useState(false);
  const [isCustom, setIsCustom] = useState(false);
  const [customCharacterArray, setCustomCharacterArray] = useState([]);
  const [isRandomFont, setIsRandomFont] = useState(false);
  const [showCredits, setShowCredits] = useState(false);



  function handleDifficulty(event) {
    setDifficulty(event.target.value);
  }

  function handleDakutan(event) {
    setIsDakutan(event.target.checked);
  }

  function handleHiragana(event) {
    setIsHiragana(event.target.checked);
  }

  function handleKatakana(event) {
    setIsKatakana(event.target.checked);
  }

  function handleCustom(event) {
    setIsCustom(event.target.checked);
  }

  function handleRandomFont(event) {
    setIsRandomFont(event.target.checked);
  }

  function handleQuizStart() {
    if(isHiragana || isKatakana || !isCustom){
    setShowMenu(false);
    setStartQuiz(true);
    }
    else
    toast('Choose an alphabet', {
      icon: '❗'
    });

  }

  function handleLearnChoice(learnType) {
    setShowMenu(false);
    setLearn(learnType);
  }

  function closeCharacterModal(customCharacterArray) {
    setCustomCharacterArray(customCharacterArray);
    console.log(customCharacterArray);
    setIsCustom(false);
  }

  return {
    startQuiz,
    learn,
    showMenu,
    difficulty,
    isDakutan,
    isHiragana,
    isKatakana,
    isCustom,
    isRandomFont,
    showCredits,
    customCharacterArray,
    handleDifficulty,
    handleDakutan,
    handleRandomFont,
    handleQuizStart,
    handleLearnChoice,
    handleHiragana,
    handleKatakana,
    handleCustom,
    closeCharacterModal
  };
}
