import React from "react"

//Renders the checkbox to determine if user wants to take quiz with randomized fonts
export default function ChooseRandomFont(props){

    return (
        <div className="flex items-center mb-4 mt-4">
            <input 
                id="default-checkbox" 
                type="checkbox" 
                onChange={props.handleRandomFont} 
                value="" 
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">Randomize font</label>
        </div>
    )
    
}