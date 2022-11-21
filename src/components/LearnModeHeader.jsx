import React from "react"

export default function LearnModeHeader(props){

    return (
        <header className="p-6 mb-4">
            <div className="text-8xl font-bold">
              {props.kana[props.current].kana}
            </div>
            <audio id="audio" src={props.kana[props.current].audio}>
              Your browser does not support the <code>audio</code> element.
            </audio>
        </header>
    )
}