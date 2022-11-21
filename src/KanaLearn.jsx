import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import {hiragana} from "./data/hiragana"
import {hiraganaModified} from "./data/hiragana-modified"
import {katakana} from "./data/katakana"
import {katakanaModified} from "./data/katakana-modified"
import LearnModeHeader from './components/LearnModeHeader'
import KanaMnemonic from './components/KanaMnemonic'
import useLearnMode from './hooks/useLearnMode'



function KanaLearn(props) {

  const [kana,setKana] = useState([{}]);

  const { volumeIcon,
          current,
          num,
          setNextKana,
          resetQuiz,
          playSound } = useLearnMode();


    
    //Setup Quiz
    useEffect( () => {
      if(props.quiz == 'hiragana'){
        setKana(hiragana)
      }
      else if(props.quiz == 'katakana'){
        setKana(katakana)
      }
    }, [])


    //play first sound on render
    useEffect(() => {
      if(num < kana.length + 1){
        setTimeout(() => {
          playSound()

      }, 200);
    }
    },[])

    //play new sound on next kana
    useEffect(() => {
      if(num < kana.length + 1){
        playSound()
      }
    },[num])


return (
  <div className= "min-h-screen centerFlex bg-slate-50" > 
    {num < kana.length + 1 ? 
    <div className='flex justify-center  bg-slate-50 text-black text-center'>
      <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow" >
        <div className="card-inner ml-4">
          <LearnModeHeader
            kana={kana}
            current={current}
          />
          <div className=''>
            <button className='mt-3 scale-150' onClick={playSound}>{volumeIcon}</button>
          </div>
          <img src={kana[current.image]}/>
          <div> 
            <KanaMnemonic 
              kana={kana} 
              current={current}
            />  
            <div className='mb-3'>
              <button 
                className='transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                onClick={setNextKana}>Next
              </button>
            </div>        
          </div>
        </div>
      </div>
    </div> : resetQuiz()}
  </div>
  )
}


export default KanaLearn
