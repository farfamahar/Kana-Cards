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
  const [isCustom, setIsCustom] = useState(false);
  const [quizType, setQuizType] = useState("hiragana");
  const [customCharacterArray, setCustomCharacterArray] = useState([]);
  const [isRandomFont, setIsRandomFont] = useState(false);
  const [showCredits, setShowCredits] = useState(false);



  function handleDifficulty(event) {
    setDifficulty(event.target.value);
  }

  function handleDakutan(event) {
    setIsDakutan(event.target.checked);
  }

  function handleQuizType(event) {
    setQuizType(event.target.id);
    if(event.target.id == 'custom'){
      setIsCustom(event.target.checked);
    }
  }

  function handleRandomFont(event) {
    setIsRandomFont(event.target.checked);
  }

  function handleQuizStart() {
    if(quizType == 'custom' && customCharacterArray.length < 1){
      toast('Custom quiz needs at least 1 character', {
        icon: '❗'
      });
    }
    else{
    setShowMenu(false);
    setStartQuiz(true);
    }

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
    isCustom,
    isRandomFont,
    showCredits,
    customCharacterArray,
    quizType,
    handleDifficulty,
    handleDakutan,
    handleRandomFont,
    handleQuizStart,
    handleLearnChoice,
    handleQuizType,
    closeCharacterModal
  };
}
