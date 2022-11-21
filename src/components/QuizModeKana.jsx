import React from "react"

//Renders the kana that appears in the middle of the card in quiz mode
export default function QuizModeKana(props){
    return (
        <div className="text-9xl font-bold mb-8">
            <h1 style={props.mystyle}>
              {props.kana[props.current].kana}
            </h1>
        </div>
    )
}