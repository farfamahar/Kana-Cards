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

  const [input, setInput] = useState('');
  const [key, setKey] = useState(0);
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
          { romanji: 'a', kana: 'ア', image: '', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/a.mp3' },
          { romanji: 'i', kana: 'イ', image: '', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/i.mp3' },
          { romanji: 'u', kana: 'ウ', image: '', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/u.mp3' },
          { romanji: 'e', kana: 'エ', image: '', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/e.mp3' } ,
          { romanji: 'o', kana: 'オ', image: '', audio: 'https://0.tqn.com/z/g/japanese/library/media/audio/o.mp3' },
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
              <img className="scale-75" src={kana[current].image}/>
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
