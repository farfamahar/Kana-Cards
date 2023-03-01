import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useQuizMode from "./hooks/useQuizMode";
import QuizModeHeader from "./components/QuizModeHeader";
import AnswerInput from "./components/AnswerInput";
import ErrorMessage from "./components/ErrorMessage";
import QuizModeKana from "./components/QuizModeKana";
import EndScreen from "./components/EndScreen";
import ReturnHome from "./components/ReturnHome";
import Streak from "./components/Streak";

import "./index.css";
import ContinueQuizButton from "./components/ContinueQuizButton";

function KanaQuiz({ quizType, custom, difficulty, dakutan, randomFont, customCharacterArray }) {
  let intervalId = 0;
  let intervalId2 = 0;

  let {
    mystyle,
    randomizeFont,
    kana,
    input,
    key,
    current,
    iterator,
    correct,
    pause,
    isCorrect,
    streak,
    error,
    handleChange,
    handlePause,
    handleSubmit,
    handleTimer,
  } = useQuizMode({ quizType, custom, difficulty, dakutan, randomFont, customCharacterArray });

  //answer timer
  useEffect(() => {
    clearInterval(intervalId);
    intervalId = setTimeout(() => {
      if (!pause) {
        // handleTimer(true);
        // if(iterator < kana.length){
        const formSubmitButton = document.getElementById("submitForm");
        formSubmitButton.click();
        // }
      }
    }, difficulty * 1000);
    // }
    return () => clearInterval(intervalId);
  }, [iterator, pause]);

  //answer timer delay to prevent null error on empty answer check with no time
  useEffect(() => {
    clearInterval(intervalId2);
    if (iterator < kana.length) {
      intervalId2 = setTimeout(() => {
        if (!pause) {
          handleTimer(false);
        }
      }, difficulty * 1000 - 100);
    }
    return () => clearInterval(intervalId2);
  }, [iterator, pause]);

  //focus on input when quiz starts
  useEffect(() => {
    setTimeout(() => {
      const x = document.getElementById("kanaInput");
      x.focus({
        preventScroll: true,
      });
    }, 100);
    return () => clearInterval(intervalId2);
  }, []);

  if (randomFont) {
    useEffect(() => {
      randomizeFont();
    }, [iterator]);
  }

  return (
    <div className="lg:min-h-screen centerFlex bg-slate-50">
      {iterator < kana.length + 1 ? (
        <div
          className={
            pause && !isCorrect
              ? "flex justify-center  bg-slate-50 text-black text-center shake-slow shake-horizontal "
              : "flex justify-center  bg-slate-50 text-black text-center shake-slow"
          }
        >
          <div
            data-aos="slide-up"
            className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow quiz-card"
          >
            <div className="card-inner abolute ml-4">
              <QuizModeHeader iterator={iterator} kanaLength={kana.length} />
              <div>
                <QuizModeKana
                  kana={kana}
                  mystyle={mystyle}
                  current={current}
                  pause={pause}
                  isCorrect={isCorrect}
                />
                {error && <ErrorMessage error={error} />}
                {pause && isCorrect && <Streak streak={streak} />}
                <AnswerInput
                  pause={pause}
                  input={input}
                  isCorrect={isCorrect}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
                {(!pause || isCorrect) && (
                  <div className="flex justify-center">
                    <CountdownCircleTimer
                      isPlaying={!pause}
                      duration={difficulty}
                      colors={["#3B82F6", "#F7B801", "#A30000", "#A30000"]}
                      colorsTime={[3, 2, 1, 0]}
                      size={60}
                      key={key}
                    >
                      {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                  </div>
                )}

                <div className="mb-3">
                  {pause && !isCorrect && (
                    <ContinueQuizButton handlePause={handlePause} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EndScreen correct={correct} kanaLength={kana.length} />
      )}
      <ReturnHome />
    </div>
  );
}

KanaQuiz.propTypes = {
  quizType: PropTypes.string,
  difficulty: PropTypes.number,
  dakutan: PropTypes.bool,
  randomFont: PropTypes.bool,
  custom: PropTypes.bool,
  customCharacterArray: PropTypes.array
};

export default KanaQuiz;
