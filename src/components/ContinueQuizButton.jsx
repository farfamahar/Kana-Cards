import React from "react"

//Renders the button that appears when a wrong answer is submitted
export default function ContinueQuizButton(props){
    return(
        <button 
                className='transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                onClick={props.handlePause}>Continue
        </button>
    )
}