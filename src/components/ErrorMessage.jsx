import React from "react"

//Renders an error display the correct answer when answering wrong
export default function ErrorMessage(props){
    return(
        <p data-aos="fade-up" className="text-red-600 , text-center "> {props.error} </p>
    )
}