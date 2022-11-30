import KanaQuiz from './KanaQuiz';
import KanaLearn from './KanaLearn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TitleHeader from "./components/TitleHeader"
import useMenu from './hooks/useMenu';
import ChooseDifficulty from './components/ChooseDifficulty';
import ChooseDakutan from './components/ChooseDakutan';
import ChooseRandomFont from './components/ChooseRandomFont';
import ChooseLearnMode from "./components/ChooseLearnMode"
import ChooseQuizMode from "./components/ChooseQuizMode"
import Credits from "./components/Credits"

AOS.init();


function App() {

  const { quiz,
    learn,
    show,
    difficulty,
    isDakutan,
    isRandomFont,
    handleDifficulty,
    handleDakutan,
    handleRandomFont,
    handleQuizChoice,
    handleLearnChoice} = useMenu();
  
  return (
    <div>
    {show &&
      <div data-aos="slide-up"  className=" min-h-screen  centerFlex  mobile-card">
        <div className=" text-white max-w-lg rounded-lg overflow-hidden shadow-lg bg-white soft-shadow pr-16 pl-16">
      
       <TitleHeader/>
       <ChooseLearnMode handleLearnChoice={handleLearnChoice}/>

        <hr className='mt-3 mb-3'/>

        <h1 className='text-1xl font-bold uppercase mt-5 mb-3 text-black	' > Quiz</h1> 
        <ChooseDifficulty 
          handleDifficulty={handleDifficulty} 
          difficulty={difficulty}
        />
        <p className="text-slate-400 text-xs mt-2"> {difficulty} seconds to answer</p>
        
        <ChooseDakutan
          handleDakutan={handleDakutan}
        />

        <ChooseRandomFont
          handleRandomFont={handleRandomFont}
        />

        <ChooseQuizMode 
          handleQuizChoice={handleQuizChoice}
        />
              <Credits/>

      </div>


    </div>}

      {quiz && <KanaQuiz 
                  quiz={quiz} 
                  difficulty={difficulty} 
                  dakutan={isDakutan} 
                  randomFont={isRandomFont} 
                />
      }
      {learn && <KanaLearn 
                  quiz={learn} 
                />
      }

      {show && <div className='bg-scroll'> </div>}


    </div> 
    )
  }


export default App
