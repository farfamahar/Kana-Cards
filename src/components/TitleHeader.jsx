
import React from "react"

//Renders the header on the title screen which contains the logo
export default function TitleHeader() {
    return(
    <header className="p-6 mb-4 text-center">
        <img className='scale-75' src="/src/assets/logo.png"/>
    </header>
    )
}