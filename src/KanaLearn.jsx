import { useState, useEffect } from 'react'
import LearnModeHeader from './components/LearnModeHeader'
import KanaMnemonic from './components/KanaMnemonic'
import NextKanaButton from './components/NextKanaButton'
import useLearnMode from './hooks/useLearnMode'
import PlaySoundButton from './components/PlaySoundButton'



function KanaLearn(props) {


  const { volumeIcon,
          current,
          num,
          kana,
          setNextKana,
          setPrevKana,
          resetQuiz,
          playSound } = useLearnMode(props);


    //play new sound on next kana
    useEffect(() => {
      if(num < kana.length + 1){
        playSound()
      }
    },[num])

//TODO: Simplify tailwind css
return (
  <div className= "min-h-screen centerFlex bg-slate-50" > 
    {num < kana.length + 1 ? 
    <div className='flex justify-center  bg-slate-50 text-black text-center'>
      <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow mobile-card" >
        <div className="card-inner ml-4">
          <LearnModeHeader
            kana={kana}
            current={current}
          />
          <div>
            <PlaySoundButton
              playSound={playSound}
              volumeIcon={volumeIcon}
            />
          </div>
          <div> 
            <KanaMnemonic 
              kana={kana} 
              current={current}
            />  
            <NextKanaButton
              setNextKana={setNextKana}
              setPrevKana={setPrevKana}
            /> 
          </div>
          
        </div>
      </div>
    </div> : resetQuiz()}
  </div>
  )
}


export default KanaLearn
