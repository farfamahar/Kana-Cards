import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faVolumeOff } from '@fortawesome/free-solid-svg-icons'


function KanaLearn(props) {
  let timeoutId = 0;

  const volumeUpIcon = <FontAwesomeIcon icon={faVolumeUp} />
  const volumeOffIcon = <FontAwesomeIcon icon={faVolumeOff} />

  const [volumeIcon, setVolumeIcon] = useState(volumeUpIcon)

  const [kana,setKana] = useState([{}]);

  const [current, setCurrent] = useState(0);
  const [num, setNum] = useState(1);
  const [pause, setPause] = useState(false);

  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);

  const setNextKana = () => {
    // const randomIndex = Math.floor(Math.random() * kana.length)
    clearInterval(timeoutId)
    setCurrent(prev => prev+1)
    setNum(num + 1)
  }

  const resetQuiz = () => {
    setNum(1)
    setCurrent(0)
  }
    
    //Setup Quiz
    useEffect( () => {
      if(props.quiz == 'hiragana'){
        setKana([
          { romanji: 'a', kana: 'あ', image: './src/assets/hiragana-mnemonics/A.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/a.mp3' },
          { romanji: 'i', kana: 'い', image: './src/assets/hiragana-mnemonics/I.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/i.mp3' },
          { romanji: 'u', kana: 'う', image: './src/assets/hiragana-mnemonics/U.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/u.mp3' },
          { romanji: 'e', kana: 'え', image: './src/assets/hiragana-mnemonics/E.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/e.mp3' },
          { romanji: 'o', kana: 'お', image: './src/assets/hiragana-mnemonics/O.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/o.mp3' },
          { romanji: 'ka', kana: 'か', image: './src/assets/hiragana-mnemonics/KA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ka.mp3' },
          { romanji: 'ki', kana: 'き', image: './src/assets/hiragana-mnemonics/KI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ki.mp3' },
          { romanji: 'ku', kana: 'く', image: './src/assets/hiragana-mnemonics/KU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ku.mp3' },
          { romanji: 'ke', kana: 'け', image: './src/assets/hiragana-mnemonics/KE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ke.mp3' },
          { romanji: 'ko', kana: 'こ', image: './src/assets/hiragana-mnemonics/KO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ko.mp3' },
          { romanji: 'sa', kana: 'さ', image: './src/assets/hiragana-mnemonics/SA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/sa.mp3' },
          { romanji: 'shi', kana: 'し', image: './src/assets/hiragana-mnemonics/SHI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/shi.mp3' },
          { romanji: 'su', kana: 'す', image: './src/assets/hiragana-mnemonics/SU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/su.mp3' },
          { romanji: 'se', kana: 'せ', image: './src/assets/hiragana-mnemonics/SE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/se.mp3' },
          { romanji: 'so', kana: 'そ', image: './src/assets/hiragana-mnemonics/SO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/so.mp3' },
          { romanji: 'ta', kana: 'た', image: './src/assets/hiragana-mnemonics/TA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ta.mp3' },
          { romanji: 'chi', kana: 'ち', image: './src/assets/hiragana-mnemonics/CHI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/chi.mp3'  },
          { romanji: 'tsu', kana: 'つ', image: './src/assets/hiragana-mnemonics/TSU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/tsu.mp3' },
          { romanji: 'te', kana: 'て', image: './src/assets/hiragana-mnemonics/TE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/te.mp3' },
          { romanji: 'to', kana: 'と', image: './src/assets/hiragana-mnemonics/TO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/to.mp3' },
          { romanji: 'na', kana: 'な', image: './src/assets/hiragana-mnemonics/NA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/na.mp3' },
          { romanji: 'ni', kana: 'に', image: './src/assets/hiragana-mnemonics/NI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ni.mp3' },
          { romanji: 'nu', kana: 'ぬ', image: './src/assets/hiragana-mnemonics/NU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/nu.mp3' },
          { romanji: 'ne', kana: 'ね', image: './src/assets/hiragana-mnemonics/NE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ne.mp3' },
          { romanji: 'no', kana: 'の', image: './src/assets/hiragana-mnemonics/NO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/no.mp3' },
          { romanji: 'ha', kana: 'は', image: './src/assets/hiragana-mnemonics/HA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ha.mp3' },
          { romanji: 'hi', kana: 'ひ', image: './src/assets/hiragana-mnemonics/HI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/hi.mp3' },
          { romanji: 'fu', kana: 'ふ', image: './src/assets/hiragana-mnemonics/FU.webp',  audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/fu.mp3'},
          { romanji: 'he', kana: 'へ', image: './src/assets/hiragana-mnemonics/HE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/he.mp3' },
          { romanji: 'ho', kana: 'ほ', image: './src/assets/hiragana-mnemonics/HO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ho.mp3' },
          { romanji: 'mi', kana: 'み', image: './src/assets/hiragana-mnemonics/MI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/mi.mp3' },
          { romanji: 'mu', kana: 'む', image: './src/assets/hiragana-mnemonics/MU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/mu.mp3' },
          { romanji: 'me', kana: 'め', image: './src/assets/hiragana-mnemonics/ME.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/me.mp3'},
          { romanji: 'mo', kana: 'も', image: './src/assets/hiragana-mnemonics/MO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/mo.mp3' },
          { romanji: 'ya', kana: 'や', image: './src/assets/hiragana-mnemonics/YA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ya.mp3' },
          { romanji: 'yu', kana: 'ゆ', image: './src/assets/hiragana-mnemonics/YU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/yu.mp3' },
          { romanji: 'yo', kana: 'よ', image: './src/assets/hiragana-mnemonics/YO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/yo.mp3' },
          { romanji: 'ra', kana: 'ら', image: './src/assets/hiragana-mnemonics/RA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ra.mp3' },
          { romanji: 'ri', kana: 'り', image: './src/assets/hiragana-mnemonics/RI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ri.mp3' },
          { romanji: 'ru', kana: 'る', image: './src/assets/hiragana-mnemonics/RU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ru.mp3' },
          { romanji: 're', kana: 'れ', image: './src/assets/hiragana-mnemonics/RE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/re.mp3' },
          { romanji: 'ro', kana: 'ろ', image: './src/assets/hiragana-mnemonics/RO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ro.mp3' },
          { romanji: 'wa', kana: 'わ', image: './src/assets/hiragana-mnemonics/WA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/wa.mp3' },
          { romanji: 'wo', kana: 'を', image: './src/assets/hiragana-mnemonics/WO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/o.mp3' },
          { romanji: 'n', kana: 'ん', image: './src/assets/hiragana-mnemonics/N.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/n.mp3' }
        ])

      }
      else if(props.quiz == 'katakana'){
        setKana([
          { romanji: 'a', kana: 'ア', image: './src/assets/katakana-mnemonics/A.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/a.mp3' },
          { romanji: 'i', kana: 'イ', image: './src/assets/katakana-mnemonics/I.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/i.mp3' },
          { romanji: 'u', kana: 'ウ', image: './src/assets/katakana-mnemonics/U.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/u.mp3' },
          { romanji: 'e', kana: 'エ', image: './src/assets/katakana-mnemonics/E.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/e.mp3' } ,
          { romanji: 'o', kana: 'オ', image: './src/assets/katakana-mnemonics/O.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/o.mp3' },
          { romanji: 'ka', kana: 'カ', image: './src/assets/katakana-mnemonics/KA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ka.mp3'},
          { romanji: 'ki', kana: 'キ', image: './src/assets/katakana-mnemonics/KI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ki.mp3' },
          { romanji: 'ku', kana: 'ク', image: './src/assets/katakana-mnemonics/KU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ku.mp3' },
          { romanji: 'ke', kana: 'ケ', image: './src/assets/katakana-mnemonics/KE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ke.mp3' },
          { romanji: 'ko', kana: 'コ', image: './src/assets/katakana-mnemonics/KO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ko.mp3' },
          { romanji: 'sa', kana: 'サ', image: './src/assets/katakana-mnemonics/SA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/sa.mp3' },
          { romanji: 'shi', kana: 'シ', image: './src/assets/katakana-mnemonics/SHI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/shi.mp3' },
          { romanji: 'su', kana: 'ス', image: './src/assets/katakana-mnemonics/SU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/su.mp3' },
          { romanji: 'se',kana: 'セ', image: './src/assets/katakana-mnemonics/SE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/se.mp3' },
          { romanji: 'so', kana: 'ソ', image: './src/assets/katakana-mnemonics/SO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/so.mp3' },
          { romanji: 'ta', kana: 'タ', image: './src/assets/katakana-mnemonics/TA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ta.mp3' },
          { romanji: 'chi', kana: 'チ', image: './src/assets/katakana-mnemonics/CHI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/chi.mp3' },
          { romanji: 'tsu', kana: 'ツ', image: './src/assets/katakana-mnemonics/TSU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/tsu.mp3' },
          { romanji: 'te', kana: 'テ', image: './src/assets/katakana-mnemonics/TE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/te.mp3' },
          { romanji: 'to', kana: 'ト', image: './src/assets/katakana-mnemonics/TO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/to.mp3' },
          { romanji: 'na', kana: 'ナ', image: './src/assets/katakana-mnemonics/NA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/na.mp3' },
          { romanji: 'ni', kana: 'ニ', image: './src/assets/katakana-mnemonics/NI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ni.mp3' },
          { romanji: 'nu', kana: 'ヌ', image: './src/assets/katakana-mnemonics/NU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/nu.mp3' },
          { romanji: 'ne', kana: 'ネ', image: './src/assets/katakana-mnemonics/NE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ne.mp3' },
          { romanji: 'no', kana: 'ノ', image: './src/assets/katakana-mnemonics/NO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/no.mp3' },
          { romanji: 'ha', kana: 'ハ', image: './src/assets/katakana-mnemonics/HA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ha.mp3' },
          { romanji: 'hi', kana: 'ヒ', image: './src/assets/katakana-mnemonics/HI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/hi.mp3' },
          { romanji: 'fu', kana: 'フ' , image: './src/assets/katakana-mnemonics/FU.webp' , audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/fu.mp3'},
          { romanji: 'he', kana: 'ヘ', image: './src/assets/katakana-mnemonics/HE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/he.mp3' },
          { romanji: 'ho', kana: 'ホ', image: './src/assets/katakana-mnemonics/HO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ho.mp3' },
          { romanji: 'ma', kana: 'マ', image: './src/assets/katakana-mnemonics/MA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ma.mp3' },
          { romanji: 'mi', kana: 'ミ', image: './src/assets/katakana-mnemonics/MI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/mi.mp3' },
          { romanji: 'mu', kana: 'ム', image: './src/assets/katakana-mnemonics/MU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/mu.mp3'},
          { romanji: 'me', kana: 'メ', image: './src/assets/katakana-mnemonics/ME.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/me.mp3' },
          { romanji: 'mo', kana: 'モ', image: './src/assets/katakana-mnemonics/MO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/mo.mp3' },
          { romanji: 'ya', kana: 'ヤ', image: './src/assets/katakana-mnemonics/YA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ya.mp3'},
          { romanji: 'yu', kana: 'ユ', image: './src/assets/katakana-mnemonics/YU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/yu.mp3' },
          { romanji: 'yo', kana: 'ヨ', image: './src/assets/katakana-mnemonics/YO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/yo.mp3'},
          { romanji: 'ra', kana: 'ラ', image: './src/assets/katakana-mnemonics/RA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ra.mp3' },
          { romanji: 'ri', kana: 'リ', image: './src/assets/katakana-mnemonics/RI.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ri.mp3' },
          { romanji: 'ru', kana: 'ル', image: './src/assets/katakana-mnemonics/RU.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ru.mp3' },
          { romanji: 're', kana: 'レ', image: './src/assets/katakana-mnemonics/RE.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/re.mp3' },
          { romanji: 'ro', kana: 'ロ', image: './src/assets/katakana-mnemonics/RO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/ro.mp3' },
          { romanji: 'wa', kana: 'ワ', image: './src/assets/katakana-mnemonics/WA.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/wa.mp3' },
          { romanji: 'wo', kana: 'ヲ', image: './src/assets/katakana-mnemonics/WO.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/wo.mp3'},
          { romanji: 'n', kana: 'ン', image: './src/assets/katakana-mnemonics/N.webp', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/n.mp3' }
        ])

      }

      setStreak(parseInt(localStorage.getItem('streak') || 0))
      setMaxStreak(parseInt(localStorage.getItem('maxStreak') || 0))
    }, [])

    
    function playSound() {
      clearInterval(timeoutId)
      setVolumeIcon(volumeUpIcon)
      let sound = document.getElementById("audio");
      sound.play();
      timeoutId = setTimeout(() => {
        setVolumeIcon(volumeOffIcon)

    }, 1000);
    return () => clearInterval(timeoutId);

    }

    useEffect(() => {
      if(num < kana.length + 1){
        setTimeout(() => {
          playSound()

      }, 200);
    }
    },[])

    useEffect(() => {
      if(num < kana.length + 1){
        playSound()
      }
    },[num])


return (
  <div className= "min-h-screen centerFlex bg-slate-50" >
    
    {num < kana.length + 1 ? <div className={ pause ? 'flex justify-center  bg-slate-50 text-black text-center shake-slow shake-horizontal ' : "flex justify-center  bg-slate-50 text-black text-center shake-slow"}>
      <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow" >
        <div className="card-inner ml-4">
          <header className="p-6 mb-4">
            {/* <h1 className='text-2xl font-bold uppercase' > {props.quiz} Quiz</h1> */}
            {/* <p> {num} / {kana.length}</p> */}
            <div className="text-8xl font-bold">
              {kana[current].kana}
            </div>
            <audio id="audio" src={kana[current].audio}>
              Your browser does not support the <code>audio</code> element.
            </audio>
          </header>
          <div className=''>
              <button className='mt-3 scale-150' onClick={playSound}>{volumeIcon}</button>
            </div>
          <img src={kana[current.image]}/>
          <div> 
            <div className="text-3xl font-bold mb-2">
              <img width="325px" height="335px" className="scale-75" src={kana[current].image}/>
              {/* {kana[current].kana} */}
            </div>
            {error && <p data-aos="fade-up" className="text-red-600 , text-center "> {error} </p>  }
            {/* <form id="myform"  onSubmit={handleSubmit}>
              {!pause && <input 
                id="kanaInput"
                autoFocus
                type="text"
                value={input}
                onChange={handleChange}
                className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-black outline-none
              text-center text-2xl "/>}
              <button id="submitForm"></button>
            </form> */}
  
            <div className='mb-3'>
              <button 
                className='transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                onClick={setNextKana}>Next</button>
            </div>        
          </div>
        </div>
      </div>
    </div> : resetQuiz()}
    </div>
  )
}


export default KanaLearn
