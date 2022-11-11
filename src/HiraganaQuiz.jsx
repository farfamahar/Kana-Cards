import { useState, useEffect } from 'react'

function App() {

  const hiragana = [
    { romanji: 'a', hiragana: 'あ' },
		{ romanji: 'i', hiragana: 'い' },
		{ romanji: 'u', hiragana: 'う' },
		{ romanji: 'e', hiragana: 'え' },
		{ romanji: 'o', hiragana: 'お' },
		{ romanji: 'ka', hiragana: 'か' },
		{ romanji: 'ki', hiragana: 'き' },
		{ romanji: 'ku', hiragana: 'く' },
		{ romanji: 'ke', hiragana: 'け' },
		{ romanji: 'ko', hiragana: 'こ' },
		{ romanji: 'sa', hiragana: 'さ' },
		{ romanji: 'shi', hiragana: 'し' },
		{ romanji: 'su', hiragana: 'す' },
		{ romanji: 'se', hiragana: 'せ' },
		{ romanji: 'so', hiragana: 'そ' },
		{ romanji: 'ta', hiragana: 'た' },
		{ romanji: 'chi', hiragana: 'ち' },
		{ romanji: 'tsu', hiragana: 'つ' },
		{ romanji: 'te', hiragana: 'て' },
		{ romanji: 'to', hiragana: 'と' },
		{ romanji: 'na', hiragana: 'な' },
		{ romanji: 'ni', hiragana: 'に' },
		{ romanji: 'nu', hiragana: 'ぬ' },
		{ romanji: 'ne', hiragana: 'ね' },
		{ romanji: 'no', hiragana: 'の' },
		{ romanji: 'ha', hiragana: 'は' },
		{ romanji: 'hi', hiragana: 'ひ' },
		{ romanji: 'fu', hiragana: 'ふ' },
		{ romanji: 'he', hiragana: 'へ' },
		{ romanji: 'ho', hiragana: 'ほ' },
		{ romanji: 'ma', hiragana: 'ま' },
		{ romanji: 'mi', hiragana: 'み' },
		{ romanji: 'mu', hiragana: 'む' },
		{ romanji: 'me', hiragana: 'め' },
		{ romanji: 'mo', hiragana: 'も' },
		{ romanji: 'ya', hiragana: 'や' },
		{ romanji: 'yu', hiragana: 'ゆ' },
		{ romanji: 'yo', hiragana: 'よ' },
		{ romanji: 'ra', hiragana: 'ら' },
		{ romanji: 'ri', hiragana: 'り' },
		{ romanji: 'ru', hiragana: 'る' },
		{ romanji: 're', hiragana: 'れ' },
		{ romanji: 'ro', hiragana: 'ろ' },
		{ romanji: 'wa', hiragana: 'わ' },
		{ romanji: 'wo', hiragana: 'を' },
		{ romanji: 'n', hiragana: 'ん' }
  ]

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

  const setRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length)
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
    setRandomHiragana();
    // document.getElementById("hiraganaInput").focus();
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    if(input.length < 1 && timerIsActive){
      
    }

   else if(input.toLowerCase() === hiragana[current].romanji){
      setStreak(streak + 1)
      setNum(num + 1)
      setMaxStreak(Math.max(streak+1,maxStreak))
      setError(false)
      setInput('');
      setRandomHiragana();
      setTimerIsActive(true);

      localStorage.setItem('maxStreak', Math.max(streak,maxStreak))
      localStorage.setItem('streak', streak + 1)
    }
      else{
        setStreak(0)
        // setNum(num + 1)
        setPause(true);
        setError(`The correct answer for 
        ${hiragana[current].hiragana} is ${hiragana[current].romanji}`)
        localStorage.setItem('streak',0)
        setTimerIsActive(true);
      }
      // setInput('');
      // setRandomHiragana()
    }
    

    useEffect( () => {
      setRandomHiragana();
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

        const x = document.getElementById("hiraganaInput");
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
        <h1 className='text-2xl font-bold uppercase' > Hiragana Quiz</h1>
          <p> {num} / {hiragana.length}</p>
      </header>
    <div> 
      <div className="text-9xl font-bold mb-8">
        {hiragana[current].hiragana}
      </div>
      {error && <p className="text-red-600 , text-center"> {error} </p>  }


       <form id="myform"  onSubmit={handleSubmit}>
          {!pause && <input id="hiraganaInput"
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


export default App
