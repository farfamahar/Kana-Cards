import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faVolumeOff } from '@fortawesome/free-solid-svg-icons'
import {hiragana} from "./data/hiragana"
import {hiraganaModified} from "./data/hiragana-modified"
import {katakana} from "./data/katakana"
import {katakanaModified} from "./data/katakana-modified"


function KanaLearn(props) {
  let timeoutId = 0;

  const volumeUpIcon = <FontAwesomeIcon icon={faVolumeUp} />
  const volumeOffIcon = <FontAwesomeIcon icon={faVolumeOff} />

  const [volumeIcon, setVolumeIcon] = useState(volumeUpIcon)

  const [kana,setKana] = useState([{}]);

  const [current, setCurrent] = useState(0);
  const [num, setNum] = useState(1);
  const [pause, setPause] = useState(false);

  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);

  const setNextKana = () => {
    // const randomIndex = Math.floor(Math.random() * kana.length)
    clearInterval(timeoutId)
    setCurrent(prev => prev+1)
    setNum(num + 1)
  }

  const resetQuiz = () => {
    setNum(1)
    setCurrent(0)
  }
    
    //Setup Quiz
    useEffect( () => {
      if(props.quiz == 'hiragana'){
        setKana(hiragana)

      }
      else if(props.quiz == 'katakana'){
        setKana(katakana)

      }

      setStreak(parseInt(localStorage.getItem('streak') || 0))
      setMaxStreak(parseInt(localStorage.getItem('maxStreak') || 0))
    }, [])

    
    function playSound() {
      clearInterval(timeoutId)
      setVolumeIcon(volumeUpIcon)
      let sound = document.getElementById("audio");
      sound.play();
      timeoutId = setTimeout(() => {
        setVolumeIcon(volumeOffIcon)

    }, 1000);
    return () => clearInterval(timeoutId);

    }

    useEffect(() => {
      if(num < kana.length + 1){
        setTimeout(() => {
          playSound()

      }, 200);
    }
    },[])

    useEffect(() => {
      if(num < kana.length + 1){
        playSound()
      }
    },[num])


return (
  <div className= "min-h-screen centerFlex bg-slate-50" >
    
    {num < kana.length + 1 ? <div className={ pause ? 'flex justify-center  bg-slate-50 text-black text-center shake-slow shake-horizontal ' : "flex justify-center  bg-slate-50 text-black text-center shake-slow"}>
      <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow" >
        <div className="card-inner ml-4">
          <header className="p-6 mb-4">
            {/* <h1 className='text-2xl font-bold uppercase' > {props.quiz} Quiz</h1> */}
            {/* <p> {num} / {kana.length}</p> */}
            <div className="text-8xl font-bold">
              {kana[current].kana}
            </div>
            <audio id="audio" src={kana[current].audio}>
              Your browser does not support the <code>audio</code> element.
            </audio>
          </header>
          <div className=''>
              <button className='mt-3 scale-150' onClick={playSound}>{volumeIcon}</button>
            </div>
          <img src={kana[current.image]}/>
          <div> 
            <div className="text-3xl font-bold mb-2">
              <img width="325px" height="335px" className="scale-75" src={kana[current].image}/>
              {/* {kana[current].kana} */}
            </div>
            {error && <p data-aos="fade-up" className="text-red-600 , text-center "> {error} </p>  }
            {/* <form id="myform"  onSubmit={handleSubmit}>
              {!pause && <input 
                id="kanaInput"
                autoFocus
                type="text"
                value={input}
                onChange={handleChange}
                className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-black outline-none
              text-center text-2xl "/>}
              <button id="submitForm"></button>
            </form> */}
  
            <div className='mb-3'>
              <button 
                className='transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                onClick={setNextKana}>Next</button>
            </div>        
          </div>
        </div>
      </div>
    </div> : resetQuiz()}
    </div>
  )
}


export default KanaLearn
