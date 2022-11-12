import { useState, useEffect } from 'react'
import KanaQuiz from './KanaQuiz'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// ..
AOS.init();


function App() {


  const [quiz, setQuiz] = useState('');
  const [show, setShow] = useState(true);
  const [difficulty, setDifficulty] = useState('');


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
      <div data-aos="slide-up"  className=" min-h-screen  centerFlex ">
        <div className=" text-white max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pr-16 pl-16">
          <header className="p-6 mb-4 text-center">
            <h1 className='text-2xl font-bold uppercase mt-5 mb-5 text-black	' > Kana Cards</h1>
            <p className='text-black text-3xl'> (◡ ‿ ◡ ✿) </p>
          </header>
        <div className='mb-5 '> 
          <h1 className='text-1xl font-bold uppercase mt-5 mb-3 text-black	' > Learn</h1>
          <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleHiraganaQuizChoice}> Hiragana</button>
          <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleKatakanaQuizChoice}> Katakana</button>
        </div>

        <hr className='mt-3 mb-3'/>

        <h1 className='text-1xl font-bold uppercase mt-5 mb-3 text-black	' > Quiz</h1>
        <div class="flex">
          <div class="flex items-center mr-4">
            <input  id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
            <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Easy</label>
          </div>
          <div class="flex items-center mr-4">
            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
            <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
          </div>
          <div class="flex items-center mr-4">
            <input id="inline-3-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="inline-3-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hard</label>
          </div>
        </div>

        <div class="flex items-center mb-4 mt-4">
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rendaku</label>
        </div>
        <div className='mb-5 '>
          <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleHiraganaQuizChoice}> Hiragana</button>
          <button className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={handleKatakanaQuizChoice}> Katakana</button>
        </div>
      </div>
    </div>}
      {quiz && <KanaQuiz quiz={quiz} stateChanger={setShow}/>}
      <div className='bg-scroll'> </div>
    </div> 
    )
  }


export default App
