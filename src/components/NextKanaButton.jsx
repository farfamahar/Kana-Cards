import React from "react"

export default function NextKanaButton(props){
    return (
        <div className='mb-3'>
            <button 
                className='transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ... bg-blue-500 text-white font-bold py-2 px-4 rounded m-4' 
                onClick={props.setNextKana}>Next
            </button>
        </div> 

    )

}