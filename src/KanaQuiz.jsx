import {useEffect } from 'react'
import Confetti from 'react-confetti'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import useQuizMode from './hooks/useQuizMode';

import './index.css'

function KanaQuiz(props) {

  

  const {
  mystyle,
  randomizeFont,
  kana,
  input,
  key,
  current,
  num,
  correct,
  pause,
  streak,
  maxStreak,
  timerIsActive,
  error,
  setRandomkana,
  handleChange,
  handlePause,
  endQuiz,
  handleSubmit,
  handleTimer } = useQuizMode(props)


  let intervalId = 0;
  let intervalId2 = 0;



  //answer timer
  useEffect(() => {
    clearInterval(intervalId)
      if(num < 46){
        intervalId = setTimeout(() => {
          if(!pause){
            const formSubmitButton = document.getElementById("submitForm");
            formSubmitButton.click();
          }
        }, (props.difficulty * 1000) );
      }
    return () => clearInterval(intervalId);
  },[num,pause])

  //answer timer delay to prevent null error on empty answer check with no time
  useEffect(() => {
    clearInterval(intervalId2)
      if(num < 46){
        intervalId2 = setTimeout(() => {
          if(!pause){
            handleTimer(false);
          }
        }, (props.difficulty * 1000) - 100);
      }
      return () => clearInterval(intervalId2);
  },[num,pause])

  //focus on input on game start
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
    {num < kana.length + 1 ? <div className={ pause ? 'flex justify-center  bg-slate-50 text-black text-center shake-slow shake-horizontal ' : "flex justify-center  bg-slate-50 text-black text-center shake-slow"}>
      <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow" >
        <div className="card-inner ml-4">
          <header className="p-6 mb-8 ml-16 mr-16">
            {/* <h1 className='text-2xl font-bold uppercase' > {props.quiz} Quiz</h1> */}
            <p> {num} / {kana.length}</p>
          </header>
          <div> 
            <div className="text-9xl font-bold mb-8">
              <h1 style={mystyle}>
              {kana[current].kana}
              </h1>
            </div>
            {error && <p data-aos="fade-up" className="text-red-600 , text-center "> {error} </p>  }
            <form id="myform"  onSubmit={(event) => handleSubmit(event)} autoComplete="off">
              {!pause && <input 
                id="kanaInput"
                autoFocus
                type="text"
                value={input}
                onChange={handleChange}
                className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-black outline-none
              text-center text-2xl "/>}
              <button id="submitForm"></button>
            </form>
            {!pause && 
              <div className='flex justify-center'> 
                <CountdownCircleTimer
                  isPlaying
                  duration={props.difficulty}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[3, 2, 1, 0]}
                  size={60}
                  key = {key}
                >
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer> 
              </div>
            }
  
            <div className='mb-3'>
              {pause && <button 
                className='transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                onClick={handlePause}>Continue</button>}
            </div>        
          </div>
        </div>
      </div>
    </div> : <div className="m-10 p-10 max-w-md rounded shadow-lg bg-white ¥">
                <div className='p-8'>
                  <h1 className='text-2xl font-bold uppercase mb-3 text-center '> Final Score </h1>
                  <p className='text-1xl text-center'>{correct} out of {kana.length}</p>
                  <p className='text-center text-5xl font-bold uppercase m-6 p-4'> 🎉🎉🎉 </p> 
                  {/* <p className='text-center'> Perfect Score </p> */}
                  <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    gravity={0.1}
                  />
                  <form className='flex justify-center mt-4'> 
                    <button 
                      className='text-center transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                      type="submit"> Return 
                    </button>
                  </form>
                </div>
              </div>}
    </div>
  )
}


export default KanaQuiz
