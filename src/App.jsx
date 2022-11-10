import { useState, useEffect } from 'react'
import KatakanaQuiz from './KatakanaQuiz'
import HiraganaQuiz from './HiraganaQuiz'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


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
      <div  className=" min-h-screen  centerFlex ">
      <div className=" text-white text-center max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pr-16 pl-16">
      <header className="p-6 mb-4">
        <h1 className='text-2xl font-bold uppercase mt-5 text-black	' > Japanese Character Quiz</h1>
      </header>
      <div className='mb-5'>
        <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleHiraganaQuizChoice}> Hiragana</button>
        <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleKatakanaQuizChoice}> Katakana</button>
      </div>
      </div>
      </div>}
      {quiz === 'katakana' ? <KatakanaQuiz/> : quiz==="hiragana" ? <HiraganaQuiz/> : ""}
      <div className='bg-scroll'> </div>
    </div>
    
  )
  }


export default App
