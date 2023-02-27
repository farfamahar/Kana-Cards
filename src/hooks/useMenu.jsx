/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function useMenu() {
  //TODO: Put the top two into one function
  const [quiz, setQuiz] = useState("");
  const [learn, setLearn] = useState("");
  const [show, setShow] = useState(true);
  const [difficulty, setDifficulty] = useState(10);
  const [isDakutan, setIsDakutan] = useState(false);
  const [isRandomFont, setIsRandomFont] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  function handleDifficulty(event) {
    setDifficulty(event.target.value);
  }

  function handleDakutan(event) {
    setIsDakutan(event.target.checked);
  }

  function handleRandomFont(event) {
    setIsRandomFont(event.target.checked);
  }

  function handleQuizChoice(quizType) {
    setShow(false);
    setQuiz(quizType);
  }

  function handleLearnChoice(learnType) {
    setShow(false);
    setLearn(learnType);
  }

  return {
    quiz,
    learn,
    show,
    difficulty,
    isDakutan,
    isRandomFont,
    showCredits,
    handleDifficulty,
    handleDakutan,
    handleRandomFont,
    handleQuizChoice,
    handleLearnChoice,
  };
}
