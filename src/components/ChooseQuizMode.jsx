import React from "react"

//Renders two buttons choose which type of quiz to take (Hiragana or Katakana)
export default function ChooseQuizMode(props){

    return (
        <div className='mb-5 w-max'>
          <button className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => props.handleQuizChoice('hiragana')}> Hiragana</button>
          <button className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={() => props.handleQuizChoice('katakana')}> Katakana</button>
        </div>
    )
}