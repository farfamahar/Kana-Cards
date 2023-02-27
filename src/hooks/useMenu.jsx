/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function useMenu() {
  //TODO: Put the top two into one function
  const [startQuiz, setStartQuiz] = useState(false);
  const [learn, setLearn] = useState("");
  const [show, setShow] = useState(true);
  const [difficulty, setDifficulty] = useState(10);
  const [isDakutan, setIsDakutan] = useState(false);
  const [isHiragana, setIsHiragana] = useState(false);
  const [isKatakana, setIsKatakana] = useState(false);
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

  function handleRandomFont(event) {
    setIsRandomFont(event.target.checked);
  }

  function handleQuizStart() {
    if(isHiragana || isKatakana){
    setShow(false);
    setStartQuiz(true);
    }
    else
    toast('Choose an alphabet', {
      icon: '❗'
    });

  }

  function handleLearnChoice(learnType) {
    setShow(false);
    setLearn(learnType);
  }

  return {
    startQuiz,
    learn,
    show,
    difficulty,
    isDakutan,
    isHiragana,
    isKatakana,
    isRandomFont,
    showCredits,
    handleDifficulty,
    handleDakutan,
    handleRandomFont,
    handleQuizStart,
    handleLearnChoice,
    handleHiragana,
    handleKatakana
  };
}
