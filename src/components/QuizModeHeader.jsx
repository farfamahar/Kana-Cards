import React from "react"

//Renders the how many quiz items you've completed
export default function QuizModeHeader(props) {
    return(
        <header className="p-6 mb-8 ml-16 mr-16">
            <p className="whitespace-nowrap	"> {props.num} / {props.kana.length}</p>
          </header>
    )
}