import { useState, useEffect } from 'react'


function App() {


  const katakana = [
    { romanji: 'a', katakana: 'ア' },
		{ romanji: 'i', katakana: 'イ' },
		{ romanji: 'u', katakana: 'ウ' },
		{ romanji: 'e', katakana: 'エ' },
		{ romanji: 'o', katakana: 'オ' },
		{ romanji: 'ka', katakana: 'カ' },
		{ romanji: 'ki', katakana: 'キ' },
		{ romanji: 'ku', katakana: 'ク' },
		{ romanji: 'ke', katakana: 'ケ' },
		{ romanji: 'ko', katakana: 'コ' },
		{ romanji: 'sa', katakana: 'サ' },
		{ romanji: 'shi', katakana: 'シ' },
		{ romanji: 'su', katakana: 'ス' },
		{ romanji: 'se',katakana: 'セ' },
		{ romanji: 'so', katakana: 'ソ' },
		{ romanji: 'ta', katakana: 'タ' },
		{ romanji: 'chi', katakana: 'チ' },
		{ romanji: 'tsu', katakana: 'ツ' },
		{ romanji: 'te', katakana: 'テ' },
		{ romanji: 'to', katakana: 'ト' },
		{ romanji: 'na', katakana: 'ナ' },
		{ romanji: 'ni', katakana: 'ニ' },
		{ romanji: 'nu', katakana: 'ヌ' },
		{ romanji: 'ne', katakana: 'ネ' },
		{ romanji: 'no', katakana: 'ノ' },
		{ romanji: 'ha', katakana: 'ハ' },
		{ romanji: 'hi', katakana: 'ヒ' },
		{ romanji: 'fu', katakana: 'フ' },
		{ romanji: 'he', katakana: 'ヘ' },
		{ romanji: 'ho', katakana: 'ホ' },
		{ romanji: 'ma', katakana: 'マ' },
		{ romanji: 'mi', katakana: 'ミ' },
		{ romanji: 'mu', katakana: 'ム' },
		{ romanji: 'me', katakana: 'メ' },
		{ romanji: 'mo', katakana: 'モ' },
		{ romanji: 'ya', katakana: 'ヤ' },
		{ romanji: 'yu', katakana: 'ユ' },
		{ romanji: 'yo', katakana: 'ヨ' },
		{ romanji: 'ra', katakana: 'ラ' },
		{ romanji: 'ri', katakana: 'リ' },
		{ romanji: 'ru', katakana: 'ル' },
		{ romanji: 're', katakana: 'レ' },
		{ romanji: 'ro', katakana: 'ロ' },
		{ romanji: 'wa', katakana: 'ワ' },
		{ romanji: 'wo', katakana: 'ヲ' },
		{ romanji: 'n', katakana: 'ン' }
  ]
  
  let intervalId = 0;
  let intervalId2 = 0;


  const [input, setInput] = useState('');
  const [num, setNum] = useState(1);
  const [current, setCurrent] = useState(0);

  const [pause, setPause] = useState(false);

  const [katakanaStreak, setKatakanaStreak] = useState(0)
  const [katakanaMaxStreak, setKatakanaMaxStreak] = useState(0);
  const [timerIsActive, setTimerIsActive] = useState(true);

  const [error, setError] = useState(false);

  const handlePause = () => {
    setNum(num + 1)
    setError('');
    setPause(false)
    setInput('');
    setRandomKatakana();
  }

  const setRandomKatakana = () => {
    const randomIndex = Math.floor(Math.random() * katakana.length)
    setCurrent(randomIndex)
  }

  const handleChange = evt => {
    setInput(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    if(input.length < 1 && timerIsActive){
      
    }

    if(input.toLowerCase() === katakana[current].romanji){
      
      setKatakanaStreak(katakanaStreak + 1)
      setNum(num + 1)
      setKatakanaMaxStreak(Math.max(katakanaStreak+1,katakanaMaxStreak))
      setError(false)
      setInput('');
      setRandomKatakana()


      localStorage.setItem('katakanaMaxStreak', Math.max(katakanaStreak,katakanaMaxStreak))
      localStorage.setItem('katakanaStreak', katakanaStreak + 1)
    }
      else{
        setKatakanaStreak(0)
        // setNum(num + 1)
        setPause(true);
        setError(`The correct answer for ${katakana[current].katakana} is ${katakana[current].romanji}`)
        localStorage.setItem('katakanaStreak',0)
      }

      // setInput('');
      // setRandomKatakana()
    }

    useEffect( () => {
      setRandomKatakana()
      setRandomKatakana()
      setKatakanaStreak(parseInt(localStorage.getItem('katakanaStreak') || 0))
      setKatakanaMaxStreak(parseInt(localStorage.getItem('katakanaMaxStreak') || 0))
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






  return (
    <div className= "min-h-screen centerFlex bg-slate-50" >
    <div className="flex justify-center  bg-slate-50 text-black text-center">
        <div data-aos="slide-up" data-aos-easing="ease-in-out"
          className=" m-10 p-10 max-w-md rounded  shadow-lg bg-white card card-top-right soft-shadow" >
        <div className="card-inner  ml-4">
      <header className="p-6 mb-8">
        <h1 className='text-2xl font-bold uppercase' > Katakana Quiz</h1>
          <p> {num} / {katakana.length}</p>
      </header>
    <div> 
      <div className="text-9xl font-bold mb-8">
        {katakana[current].katakana}
      </div>

      {error && <p className="text-red-600 , text-center"> {error} </p>  }


        <form onSubmit={handleSubmit}>
          {!pause &&<input
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
