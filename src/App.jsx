import { useState, useEffect } from 'react';
import KanaQuiz from './KanaQuiz';
import KanaLearn from './KanaLearn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TitleHeader from "./components/TitleHeader"
import ChooseDifficulty from './components/ChooseDifficulty';
import ChooseDakutan from './components/ChooseDakutan';
import ChooseRandomFont from './components/ChooseRandomFont';
import ChooseLearnMode from "./components/ChooseLearnMode"
import ChooseQuizMode from "./components/ChooseQuizMode"

AOS.init();


function App() {

  //TODO: Put all business logic into custom hook

  //TODO: Put the top two into one function
  const [quiz, setQuiz] = useState('');
  const [learn, setLearn] = useState('');
  const [show, setShow] = useState(true);
  //TODO: Put the bottom into an object
  const [difficulty, setDifficulty] = useState(10);
  const [isDakutan, setIsDakutan] = useState(false);
  const [isRandomFont, setIsRandomFont] = useState(false);


  function handleDifficulty(event) {
    setDifficulty(event.target.value);
  }

  function handleDakutan(event) {
    setIsDakutan(event.target.checked);
  }

  function handleRandomFont(event) {
    setIsRandomFont(event.target.checked);
  }


  function handleQuizChoice(quizType){
    setShow(false)
    setQuiz(quizType)
  }

  function handleLearnChoice(learnType){
    setShow(false)
    setLearn(learnType)

  }
  
  //TODO: Simplify tailwind css
  //TODO: Add tooltips to settings (hover to see what each one do)
  return (
    <div>
    {show &&
      <div data-aos="slide-up"  className=" min-h-screen  centerFlex ">
        <div className=" text-white max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pr-16 pl-16">
      
       <TitleHeader/>
       <ChooseLearnMode handleLearnChoice={handleLearnChoice}/>

        <hr className='mt-3 mb-3'/>

        <h1 className='text-1xl font-bold uppercase mt-5 mb-3 text-black	' > Quiz</h1> 
        <ChooseDifficulty 
          handleDifficulty={handleDifficulty} 
          difficulty={difficulty}
        />
        <p className="text-slate-400 text-xs mt-2"> {difficulty} seconds to answer</p>
        
        <ChooseDakutan
          handleDakutan={handleDakutan}
        />

        <ChooseRandomFont
          handleRandomFont={handleRandomFont}
        />

        <ChooseQuizMode 
          handleQuizChoice={handleQuizChoice}
        />

      </div>
    </div>}

      {quiz && <KanaQuiz 
                  quiz={quiz} 
                  difficulty={difficulty} 
                  dakutan={isDakutan} 
                  randomFont={isRandomFont} 
                  stateChanger={setShow}
                />
      }
      {learn && <KanaLearn 
                  quiz={learn} 
                  stateChanger={setShow}
                />
      }

      {show && <div className='bg-scroll'> </div>}
    </div> 
    )
  }


export default App
