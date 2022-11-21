import React from "react"

//Renders two buttons choose which type of learn mode to take (Hiragana or Katakana)
export default function ChooseLearnMode(props){

    return (
        <div className='mb-5 '> 
            <h1 className='text-1xl font-bold uppercase mt-5 mb-3 text-black' > Learn</h1>
            <button className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => props.handleLearnChoice('hiragana')}> Hiragana</button>
            <button className="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4" onClick={() => props.handleLearnChoice('katakana')}> Katakana</button>
      </div>
    )
}