import React from "react"
import Confetti from 'react-confetti'

/* Renders the final screen containing score after completing quiz. 
On perfect score, confetti is rendered */
export default function EndScreen(props){
    return(
        <div className="m-10 p-10 max-w-md rounded shadow-lg bg-white ¥">
                <div className='p-8'>
                  <h1 className='text-2xl font-bold uppercase mb-3 text-center '> Final Score </h1>
                  <p className='text-1xl text-center'>{props.correct} out of {props.kana.length}</p>
                  <p className='text-center text-5xl font-bold uppercase m-6 p-4'> 🎉🎉🎉 </p> 
                  {/* <p className='text-center'> Perfect Score </p> */}
                  <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    gravity={0.1}
                  />
                  <form className='flex justify-center mt-4'> 
                    <button 
                      className='text-center transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                      type="submit"> Return 
                    </button>
                  </form>
                </div>
              </div>
    )
}