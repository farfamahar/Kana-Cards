import React from "react"

//Renders the answer form where the user submits a quiz answer
export default function AnswerInput(props){
    return(
        <form id="myform"  onSubmit={(event) => props.handleSubmit(event)} autoComplete="off">
              {!props.pause && <input 
                id="kanaInput"
                autoFocus
                type="text"
                value={props.input}
                onChange={props.handleChange}
                className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-b-black outline-none
              text-center text-2xl "/>}
              {/* {props.isCorrect && <input 
                id="kanaInput"
                disabled
                autoFocus
                type="text"
                value={props.input}
                onChange={props.handleChange}
                className="block w-24 mx-auto pb-2 bg-transparent border-b-2 border-green-500 outline-none
              text-center text-2xl text-green-500 "/>} */}
              <button id="submitForm"></button>
        </form>
    )
}