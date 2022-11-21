import { useState, useEffect } from 'react';
import KanaQuiz from './KanaQuiz';
import KanaLearn from './KanaLearn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChooseDifficulty from './components/ChooseDifficulty';
import ChooseDakutan from './components/ChooseDakutan';
import ChooseRandomFont from './components/ChooseRandomFont';

AOS.init();


function App() {


  const [quiz, setQuiz] = useState('');
  const [learn, setLearn] = useState('');
  const [show, setShow] = useState(true);
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
  
  return (
    <div>
    {show &&
      <div data-aos="slide-up"  className=" min-h-screen  centerFlex ">
        <div className=" text-white max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pr-16 pl-16">
          <header className="p-6 mb-4 text-center">
            <img className='scale-75' src="/src/assets/logo.png"/>
          </header>
        <div className='mb-5 '> 
          <h1 className='text-1xl font-bold uppercase mt-5 mb-3 text-black	' > Learn</h1>
          <button className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleLearnChoice('hiragana')}> Hiragana</button>
          <button className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={() => handleLearnChoice('katakana')}> Katakana</button>
        </div>

        <hr className='mt-3 mb-3'/>

        <h1 className='text-1xl font-bold uppercase mt-5 mb-3 text-black	' > Quiz</h1>
        
        <ChooseDifficulty 
          handleDifficulty={handleDifficulty} 
          difficulty={difficulty}
        />

        <ChooseDakutan
          handleDakutan={handleDakutan}
        />

        <ChooseRandomFont
          handleRandomFont={handleRandomFont}
        />

        <div className='mb-5 '>
          <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleQuizChoice('hiragana')}> Hiragana</button>
          <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={() => handleQuizChoice('katakana')}> Katakana</button>
        </div>
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
