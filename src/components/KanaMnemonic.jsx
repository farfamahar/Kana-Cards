import React from "react"

//Renders the WaniKani Mnemonic image contained in the kana array
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