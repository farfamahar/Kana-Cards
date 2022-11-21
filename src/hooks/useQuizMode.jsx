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



    const [input, setInput] = useState('');
    const [key, setKey] = useState(0);
    const [current, setCurrent] = useState(0);
    const [num, setNum] = useState(1);
    const [correct, setCorrect] = useState(0);
    const [pause, setPause] = useState(false);

    const [streak, setStreak] = useState(0)
    const [maxStreak, setMaxStreak] = useState(0);
    const [timerIsActive, setTimerIsActive] = useState(true);

    const [error, setError] = useState(false);

    const setRandomkana = () => {
        setCurrent(prev => prev+1)
    }

    const handleChange = evt => {
        setInput(evt.target.value)
    }

  const handlePause = () => {
    setNum(num + 1)
    setError('');
    setPause(false)
    setInput('');
    setRandomkana();
  }

  const endQuiz = () => {
    props.stateChanger(true)
    setShow(false)
  }

  const handleTimer = (param) => {
    setTimerIsActive(param)
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    if(input.length < 1 && timerIsActive){
      //do nothing (TODO: Add shake nudge)
    }

    else if(input.toLowerCase() === kana[current].romanji){
        setStreak(streak + 1)
        setCorrect(prev=>prev+1)
        setNum(num + 1)
        setMaxStreak(Math.max(streak+1,maxStreak))
        setError(false)
        setInput('');
        setRandomkana();
        setTimerIsActive(true);
        setKey(prev=>prev+1)
        

        localStorage.setItem('maxStreak', Math.max(streak,maxStreak))
        localStorage.setItem('streak', streak + 1)
    }
      else{
        setStreak(0)
        setPause(true);
        setError(`The correct answer for 
        ${kana[current].kana} is ${kana[current].romanji}`)
        localStorage.setItem('streak',0)
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
        setStreak(parseInt(localStorage.getItem('streak') || 0))
        setMaxStreak(parseInt(localStorage.getItem('maxStreak') || 0))
      }, [])

    return {
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
        streak,
        maxStreak,
        timerIsActive,
        error,
        setRandomkana,
        handleChange,
        handlePause,
        endQuiz,
        handleSubmit,
        handleTimer
        };


}

