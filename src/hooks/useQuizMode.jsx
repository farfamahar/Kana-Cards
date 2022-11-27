import { useState, useEffect } from 'react'
import arrayShuffle from 'array-shuffle';
import {hiragana} from "../data/hiragana"
import {hiraganaModified} from "../data/hiragana-modified"
import {katakana} from "../data/katakana"
import {katakanaModified} from "../data/katakana-modified"

export default function useQuizMode(props) {

    let randomNum=Math.floor(Math.random() * 16);
    const [fonts, setFonts] = useState(props.randomFont ? ['Yuji Syuku', 'DotGothic16', 'Hachi Maru Pop', 'M PLUS 1 Code', 'Rampart One','Reggae One','RocknRoll One','Shippori Mincho', 'Stick', 'Yuji Mai', 'Yuji Syuku' ,'Zen Kaku Gothic New','Potta One', 'Kaisei Decol', 'Dela Gothic One', 'Shippori Mincho B1', 'Zen Kaku Gothic New'] : '')
    const [randomFont, setRandomFont] = useState(fonts[randomNum])

    const mystyle = {
        fontFamily: randomFont
    };

  
    function randomizeFont(){
        let rand=Math.floor(Math.random() * 16);
        setRandomFont(fonts[rand])
    }

    const [kana,setKana] = useState([{}]);

    let intervalId3 = 0;
    
    const [input, setInput] = useState('');
    const [key, setKey] = useState(0);
    const [current, setCurrent] = useState(0);
    const [num, setNum] = useState(1);
    const [correct, setCorrect] = useState(0);
    const [pause, setPause] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const [streak, setStreak] = useState(0)
    const [maxStreak, setMaxStreak] = useState(0);
    const [timerIsActive, setTimerIsActive] = useState(true);

    const [error, setError] = useState(false);

    const setNextkana = () => {
        setCurrent(prev => prev+1)
    }

    const handleChange = evt => {
        setInput(evt.target.value)
    }

  const handlePause = () => {
    clearInterval(intervalId3)
    setNum(num + 1)
    setError('');
    setPause(false)
    setInput('');
    setNextkana();
    setKey(prev=>prev+1)

  }

  const endQuiz = () => {
    props.stateChanger(true)
    setShow(false)
  }

  const handleTimer = (param) => {
    setTimerIsActive(param)
  }

  const handleCorrect = () => {
    setPause(false);
    setIsCorrect(false);
    setCorrect(prev=>prev+1)
    setNum(num + 1)
    setMaxStreak(Math.max(streak+1,maxStreak))
    setError(false)
    setInput('');
    setNextkana();
    setTimerIsActive(true);
    setKey(prev=>prev+1)
        

    localStorage.setItem('maxStreak', Math.max(streak,maxStreak))
    localStorage.setItem('streak', streak + 1)
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    if(input.length < 1 && timerIsActive){
      //do nothing (TODO: Add shake nudge)
    }

    if(kana[current].romanji === "fu/hu" && (input.trim().toLowerCase() === "fu" || input.trim().toLowerCase() === "hu"  )){
        clearInterval(intervalId3)
        setPause(true);
        setIsCorrect(true);
        setStreak(streak + 1)
        setTimeout(() => {
            handleCorrect();
          }, 1200);
    }

    else if(input.trim().toLowerCase() === kana[current].romanji){
        clearInterval(intervalId3)
        setPause(true);
        setIsCorrect(true);
        setStreak(streak + 1)
        setTimeout(() => {
            handleCorrect();
          }, 1200);

        // localStorage.setItem('maxStreak', Math.max(streak,maxStreak))
        // localStorage.setItem('streak', streak + 1)
    }
      else{
        clearInterval(intervalId3)
        setStreak(0)
        setPause(true);
        setError(`The correct answer for 
        ${kana[current].kana} is ${kana[current].romanji}`)
        // localStorage.setItem('streak',0)
        setTimerIsActive(true);
      }
    }

    //Setup Quiz
    useEffect( () => {
        if(props.quiz == 'hiragana'){
          setKana(hiragana)
          //append dakuten form to original array
          if(props.dakutan == true){
            setKana(prev => [...prev,...hiraganaModified])
          }
        }
        else if(props.quiz == 'katakana'){
          setKana(katakana)
           //append dakuten form to original array
          if(props.dakutan == true){
            setKana(prev => [...prev, ...katakanaModified])
          }
        }
        setKana(kana => arrayShuffle(kana))
        // setStreak(parseInt(localStorage.getItem('streak') || 0))
        setMaxStreak(parseInt(localStorage.getItem('maxStreak') || 0))
      }, [])

    return {
        intervalId3,
        fonts,
        randomFont,
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
        setNextkana,
        handleChange,
        handlePause,
        endQuiz,
        handleSubmit,
        handleTimer,
        handleCorrect
        };


}

