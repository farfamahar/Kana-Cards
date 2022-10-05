import { useState, useEffect } from 'react'
import KatakanaQuiz from './KatakanaQuiz'
import HiraganaQuiz from './HiraganaQuiz'


function App() {


  const [quiz, setQuiz] = useState('');

  function handleHiraganaQuizChoice(){
    setQuiz('hiragana')
    console.log(quiz)
  }

  function handleKatakanaQuizChoice(){
    setQuiz('katakana')
    console.log(quiz)

  }
  

  





  return (
    <div  className=" min-h-screen bg-slate-800">
      <div className=" text-white text-center">
      <header className="p-6 mb-8">
        <h1 className='text-4xl font-bold uppercase mt-10' > Japanese Character Quiz</h1>
      </header>
      <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleHiraganaQuizChoice}> Hirgana</button>
      <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleKatakanaQuizChoice}> Katakana</button>
      </div>
      {quiz === 'katakana' ? <KatakanaQuiz/> : quiz==="hiragana" ? <HiraganaQuiz/> : ""}
    </div>
  )
  }


export default App
