import { useState, useEffect } from 'react'

function KanaQuiz(props) {

  let kana = []


  if(props.quiz == 'hiragana'){
  kana = [
    { romanji: 'a', kana: 'あ' },
		{ romanji: 'i', kana: 'い' },
		{ romanji: 'u', kana: 'う' },
		{ romanji: 'e', kana: 'え' },
		{ romanji: 'o', kana: 'お' },
		{ romanji: 'ka', kana: 'か' },
		{ romanji: 'ki', kana: 'き' },
		{ romanji: 'ku', kana: 'く' },
		{ romanji: 'ke', kana: 'け' },
		{ romanji: 'ko', kana: 'こ' },
		{ romanji: 'sa', kana: 'さ' },
		{ romanji: 'shi', kana: 'し' },
		{ romanji: 'su', kana: 'す' },
		{ romanji: 'se', kana: 'せ' },
		{ romanji: 'so', kana: 'そ' },
		{ romanji: 'ta', kana: 'た' },
		{ romanji: 'chi', kana: 'ち' },
		{ romanji: 'tsu', kana: 'つ' },
		{ romanji: 'te', kana: 'て' },
		{ romanji: 'to', kana: 'と' },
		{ romanji: 'na', kana: 'な' },
		{ romanji: 'ni', kana: 'に' },
		{ romanji: 'nu', kana: 'ぬ' },
		{ romanji: 'ne', kana: 'ね' },
		{ romanji: 'no', kana: 'の' },
		{ romanji: 'ha', kana: 'は' },
		{ romanji: 'hi', kana: 'ひ' },
		{ romanji: 'fu', kana: 'ふ' },
		{ romanji: 'he', kana: 'へ' },
		{ romanji: 'ho', kana: 'ほ' },
		{ romanji: 'ma', kana: 'ま' },
		{ romanji: 'mi', kana: 'み' },
		{ romanji: 'mu', kana: 'む' },
		{ romanji: 'me', kana: 'め' },
		{ romanji: 'mo', kana: 'も' },
		{ romanji: 'ya', kana: 'や' },
		{ romanji: 'yu', kana: 'ゆ' },
		{ romanji: 'yo', kana: 'よ' },
		{ romanji: 'ra', kana: 'ら' },
		{ romanji: 'ri', kana: 'り' },
		{ romanji: 'ru', kana: 'る' },
		{ romanji: 're', kana: 'れ' },
		{ romanji: 'ro', kana: 'ろ' },
		{ romanji: 'wa', kana: 'わ' },
		{ romanji: 'wo', kana: 'を' },
		{ romanji: 'n', kana: 'ん' }
  ]}

else if(props.quiz == 'katakana'){
  kana = [
    { romanji: 'a', kana: 'ア' },
		{ romanji: 'i', kana: 'イ' },
		{ romanji: 'u', kana: 'ウ' },
		{ romanji: 'e', kana: 'エ' },
		{ romanji: 'o', kana: 'オ' },
		{ romanji: 'ka', kana: 'カ' },
		{ romanji: 'ki', kana: 'キ' },
		{ romanji: 'ku', kana: 'ク' },
		{ romanji: 'ke', kana: 'ケ' },
		{ romanji: 'ko', kana: 'コ' },
		{ romanji: 'sa', kana: 'サ' },
		{ romanji: 'shi', kana: 'シ' },
		{ romanji: 'su', kana: 'ス' },
		{ romanji: 'se',kana: 'セ' },
		{ romanji: 'so', kana: 'ソ' },
		{ romanji: 'ta', kana: 'タ' },
		{ romanji: 'chi', kana: 'チ' },
		{ romanji: 'tsu', kana: 'ツ' },
		{ romanji: 'te', kana: 'テ' },
		{ romanji: 'to', kana: 'ト' },
		{ romanji: 'na', kana: 'ナ' },
		{ romanji: 'ni', kana: 'ニ' },
		{ romanji: 'nu', kana: 'ヌ' },
		{ romanji: 'ne', kana: 'ネ' },
		{ romanji: 'no', kana: 'ノ' },
		{ romanji: 'ha', kana: 'ハ' },
		{ romanji: 'hi', kana: 'ヒ' },
		{ romanji: 'fu', kana: 'フ' },
		{ romanji: 'he', kana: 'ヘ' },
		{ romanji: 'ho', kana: 'ホ' },
		{ romanji: 'ma', kana: 'マ' },
		{ romanji: 'mi', kana: 'ミ' },
		{ romanji: 'mu', kana: 'ム' },
		{ romanji: 'me', kana: 'メ' },
		{ romanji: 'mo', kana: 'モ' },
		{ romanji: 'ya', kana: 'ヤ' },
		{ romanji: 'yu', kana: 'ユ' },
		{ romanji: 'yo', kana: 'ヨ' },
		{ romanji: 'ra', kana: 'ラ' },
		{ romanji: 'ri', kana: 'リ' },
		{ romanji: 'ru', kana: 'ル' },
		{ romanji: 're', kana: 'レ' },
		{ romanji: 'ro', kana: 'ロ' },
		{ romanji: 'wa', kana: 'ワ' },
		{ romanji: 'wo', kana: 'ヲ' },
		{ romanji: 'n', kana: 'ン' }
  ]
}

  let intervalId = 0;
  let intervalId2 = 0;

  const [input, setInput] = useState('');
  const [current, setCurrent] = useState(0);
  const [num, setNum] = useState(1);
  const [pause, setPause] = useState(false);

  // const myform = useRef(null);


  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0);
  const [timerIsActive, setTimerIsActive] = useState(true);

  const [error, setError] = useState(false);


  const setRandomkana = () => {
    const randomIndex = Math.floor(Math.random() * kana.length)
    setCurrent(randomIndex)
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
    // document.getElementById("kanaInput").focus();
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    if(input.length < 1 && timerIsActive){
      
    }

   else if(input.toLowerCase() === kana[current].romanji){
      setStreak(streak + 1)
      setNum(num + 1)
      setMaxStreak(Math.max(streak+1,maxStreak))
      setError(false)
      setInput('');
      setRandomkana();
      setTimerIsActive(true);

      localStorage.setItem('maxStreak', Math.max(streak,maxStreak))
      localStorage.setItem('streak', streak + 1)
    }
      else{
        setStreak(0)
        // setNum(num + 1)
        setPause(true);
        setError(`The correct answer for 
        ${kana[current].kana} is ${kana[current].romanji}`)
        localStorage.setItem('streak',0)
        setTimerIsActive(true);
      }
      // setInput('');
      // setRandomkana()
    }
    

    useEffect( () => {
      setRandomkana();
      setStreak(parseInt(localStorage.getItem('streak') || 0))
      setMaxStreak(parseInt(localStorage.getItem('maxStreak') || 0))
    }, [])


    useEffect(() => {
      clearInterval(intervalId)
      intervalId = setInterval(() => {
        if(!pause){
        const formSubmitButton = document.getElementById("submitForm");
        formSubmitButton.click();
        }
      }, 3000);
      return () => clearInterval(intervalId);
    },[num,pause])

    useEffect(() => {
      clearInterval(intervalId2)
      intervalId2 = setInterval(() => {
        if(!pause){
          setTimerIsActive(false);

        }
      }, 2900);
      return () => clearInterval(intervalId2);
    },[num,pause])

    useEffect(() => {
      setTimeout(() => {

        const x = document.getElementById("kanaInput");
        x.focus({
          preventScroll: true
        });
    
      }, 100);
      return () => clearInterval(intervalId2);
    },[num,pause])


  return (
<div className= "min-h-screen centerFlex bg-slate-50" >
      <div className=" flex justify-center  bg-slate-50 text-black text-center ">
        <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow" >
        <div className="card-inner ml-4">
      <header className="p-6 mb-8">
        <h1 className='text-2xl font-bold uppercase' > {props.quiz} Quiz</h1>
          <p> {num} / {kana.length}</p>
      </header>
    <div> 
      <div className="text-9xl font-bold mb-8">
        {kana[current].kana}
      </div>
      {error && <p className="text-red-600 , text-center"> {error} </p>  }


       <form id="myform"  onSubmit={handleSubmit}>
          {!pause && <input id="kanaInput"
            autoFocus
            type="text"
            value={input}
            onChange={handleChange}
            className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-black outline-none
            text-center text-2xl "/>}
            <button id="submitForm"></button>
            </form>
  
            <div className='mb-3 pb-8'>
              {pause && <button onClick={handlePause}>Continue</button>}
            </div>        
        </div>
      </div>
    </div>
      </div>
      </div>
  )
  }


export default KanaQuiz
