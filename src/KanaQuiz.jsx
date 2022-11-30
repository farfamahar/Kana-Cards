import {useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import useQuizMode from './hooks/useQuizMode';
import QuizModeHeader from './components/QuizModeHeader';
import AnswerInput from './components/AnswerInput';
import ErrorMessage from './components/ErrorMessage';
import QuizModeKana from './components/QuizModeKana';
import EndScreen from './components/EndScreen';
import ReturnHome from './components/ReturnHome';

import './index.css'
import ContinueQuizButton from './components/ContinueQuizButton';

function KanaQuiz(props) {

  let intervalId = 0;
  let intervalId2 = 0;

  let {
  intervalId3,
  mystyle,
  randomizeFont,
  kana,
  input,
  key,
  current,
  num,
  correct,
  pause,
  isCorrect,
  streak,
  maxStreak,
  timerIsActive,
  error,
  setRandomkana,
  handleChange,
  handlePause,
  endQuiz,
  handleSubmit,
  handleTimer,
  handleCorrect } = useQuizMode(props)

  //answer timer
  useEffect(() => {
    clearInterval(intervalId)
        intervalId = setTimeout(() => {
          if(!pause){
            // handleTimer(true);
            // if(num < kana.length){
              const formSubmitButton = document.getElementById("submitForm");
              formSubmitButton.click();
          // }
          }
        }, (props.difficulty * 1000) );
      // }
    return () => clearInterval(intervalId);
  },[num,pause])

  //answer timer delay to prevent null error on empty answer check with no time
  useEffect(() => {
    clearInterval(intervalId2)
      if(num < kana.length){
        intervalId2 = setTimeout(() => {
          if(!pause){
            handleTimer(false);
          }
        }, (props.difficulty * 1000) - 100);
      }
      return () => clearInterval(intervalId2);
  },[num,pause])

  //focus on input when quiz starts
  useEffect(() => {
    setTimeout(() => {
      const x = document.getElementById("kanaInput");
      x.focus({
        preventScroll: true
      });
    }, 100);
    return () => clearInterval(intervalId2);
  },[])

  if(props.randomFont){
    useEffect(() => {
      randomizeFont()
    },[num])
  }


return (
  <div className= "min-h-screen centerFlex bg-slate-50" >
    {num < kana.length + 1 ? 
    <div className={ (pause && !isCorrect) ? 'flex justify-center  bg-slate-50 text-black text-center shake-slow shake-horizontal ' : "flex justify-center  bg-slate-50 text-black text-center shake-slow"}>
      <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow mobile-card" >
        <div className="card-inner abolute ml-4">
          
          <QuizModeHeader 
            num={num} 
            kana={kana}
          />
          <div> 
            <QuizModeKana
              kana={kana}
              mystyle={mystyle}
              current={current}
              pause={pause}
              isCorrect={isCorrect}
            />
            {error && <ErrorMessage error={error}/>  }
            { (pause && isCorrect) &&  <div className='flex justify-center mb-3 '>
              <p data-aos="fade-up" className="text-green-600 text-lg text-center"> { (streak > 0 && streak%5==0) ? `${streak} in a row!` : "Correct!"} </p>
                </div>}
            <AnswerInput
              pause={pause}
              input={input}
              isCorrect={isCorrect}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            { (!pause || isCorrect) &&
              <div className='flex justify-center'> 
                <CountdownCircleTimer
                  isPlaying={!pause}
                  duration={props.difficulty}
                  colors={['#3B82F6', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[3, 2, 1, 0]}
                  size={60}
                  key = {key}
                >
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer> 
              </div>
            }
  
            <div className='mb-3'>
              { (pause && !isCorrect) && <ContinueQuizButton handlePause={handlePause}/>}
            </div>        
          </div>
        </div>
      </div>
    </div> : <EndScreen correct={correct} kana={kana}/>}
   <ReturnHome/>
  </div>
  )
}


export default KanaQuiz
