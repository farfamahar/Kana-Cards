import React from "react"

export default function ChooseDifficulty(props) {

    return (
        <div class="flex" onChange={props.handleDifficulty}>
          <div class="flex items-center mr-4">
            <input  
              checked={props.difficulty == 10} 
              id="inline-radio" 
              type="radio" 
              value={10} 
              name="inline-radio-group" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Easy</label>
          </div>
          <div class="flex items-center mr-4">
            <input 
              checked={props.difficulty == 6} 
              id="inline-2-radio" 
              type="radio" 
              value={6} 
              name="inline-radio-group" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
          </div>
          <div class="flex items-center mr-4">
            <input 
              checked={props.difficulty == 3} 
              id="inline-3-radio" 
              type="radio" 
              value={3} 
              name="inline-radio-group" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="inline-3-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hard</label>
          </div>
        </div>

    )

}