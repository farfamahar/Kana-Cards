import React from "react"

export default function KanaMnemonic(props){
    return(
        <div className="text-3xl font-bold mb-2">
            <img 
                width="325px" 
                height="335px" 
                className="scale-75" 
                src={props.kana[props.current].image}/>
        </div>
    )
}