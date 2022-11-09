import { useState, useEffect } from 'react'
import KatakanaQuiz from './KatakanaQuiz'
import HiraganaQuiz from './HiraganaQuiz'


function App() {


  const [quiz, setQuiz] = useState('');
  const [show, setShow] = useState(true);

  function handleHiraganaQuizChoice(){
    setShow(false)
    setQuiz('hiragana')
    console.log(quiz)
  }

  function handleKatakanaQuizChoice(){
    setShow(false)
    setQuiz('katakana')
    console.log(quiz)

  }
  

  





  return (
    <div>
    {show &&
      <div  className=" min-h-screen bg-slate-800 centerFlex ">
      <div className=" text-white text-center">
      <header className="p-6 mb-8">
        <h1 className='text-4xl font-bold uppercase mt-10' > Japanese Character Quiz</h1>
      </header>
      <div className='mb-12'>
        <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleHiraganaQuizChoice}> Hiragana</button>
        <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleKatakanaQuizChoice}> Katakana</button>
      </div>
      </div>
      </div>}
      {quiz === 'katakana' ? <KatakanaQuiz/> : quiz==="hiragana" ? <HiraganaQuiz/> : ""}
    </div>
    
  )
  }


export default App
