import React from "react";
import KanaQuiz from "./KanaQuiz";
import KanaLearn from "./KanaLearn";
import AOS from "aos";
import "aos/dist/aos.css";
import TitleHeader from "./components/TitleHeader";
import useMenu from "./hooks/useMenu";
import ChooseDifficulty from "./components/ChooseDifficulty";
import ChooseDakutan from "./components/ChooseDakutan";
import ChooseRandomFont from "./components/ChooseRandomFont";
import ChooseLearnMode from "./components/ChooseLearnMode";
import ChooseQuizMode from "./components/ChooseQuizMode";
import Credits from "./components/Credits";
import { Toaster } from 'react-hot-toast';


AOS.init();

function App() {
  const {
    startQuiz,
    learn,
    show,
    difficulty,
    isDakutan,
    isHiragana,
    isKatakana,
    isRandomFont,
    handleDifficulty,
    handleDakutan,
    handleHiragana,
    handleKatakana,
    handleRandomFont,
    handleQuizStart,
    handleLearnChoice,
  } = useMenu();


  return (
    <div>
      {show && (
        <div
          data-aos="slide-up"
          className=" min-h-screen  centerFlex  mobile-card"
        >
          <div className=" text-white max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pr-16 pl-16 pb-8">
            <TitleHeader />
            <ChooseLearnMode handleLearnChoice={handleLearnChoice} />

            <hr className="mt-3 mb-3" />

            <h1 className="text-1xl font-bold uppercase mt-5 mb-3 text-black	">
              {" "}
              Quiz
            </h1>
            <ChooseDifficulty
              handleDifficulty={handleDifficulty}
              difficulty={difficulty}
            />
            <ChooseQuizMode
              handleHiragana={handleHiragana}
              handleKatakana={handleKatakana}
            />

            <ChooseDakutan handleDakutan={handleDakutan} />

            <ChooseRandomFont handleRandomFont={handleRandomFont} />

            <button
              className="mt-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleQuizStart()}
            >
              {" "}
              Start Quiz
            </button>

            <Credits />
            <Toaster/>

          </div>
        </div>
      )}

      {startQuiz && (
        <KanaQuiz
          quizType={startQuiz}
          difficulty={difficulty}
          dakutan={isDakutan}
          hiragana={isHiragana}
          katakana={isKatakana}
          randomFont={isRandomFont}
        />
      )}
      {learn && <KanaLearn quiz={learn} />}

      {show && <div className="bg-scroll"> </div>}
    </div>
  );
}

export default App;
