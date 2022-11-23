import React from "react"

//Renders 3 radio buttons to choose difficulty
export default function ChooseDifficulty(props) {

    return (
        <div className="flex" onChange={props.handleDifficulty}>
           <a href="#" className="no-underline group relative inline-block text-blue-500 hover:text-red-500 duration-300">

          <div className="flex items-center mr-4">

          <input  
              defaultChecked={props.difficulty == 10} 
              id="inline-radio" 
              type="radio" 
              value={10} 
              name="inline-radio-group" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            />
            <span
                class="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-32 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                10 seconds to answer</span>
      
            
            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Easy</label>
          </div>
          </a>
          <a href="#" class="no group relative inline-block text-blue-500 no-underline hover:text-red-500 duration-300">
          <div className="flex items-center mr-4">
          <input 
              defaultChecked={props.difficulty == 6} 
              id="inline-2-radio" 
              type="radio" 
              value={6} 
              name="inline-radio-group" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            />
            <span
                class="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-32 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                6 seconds to answer</span>
            
            <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
          </div>
        </a>
        <a href="#" class="no group relative inline-block text-blue-500 no-underline hover:text-red-500 duration-300">
          <div className="flex items-center mr-4">
            <input 
              defaultChecked={props.difficulty == 3} 
              id="inline-3-radio" 
              type="radio" 
              value={3} 
              name="inline-radio-group" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <span
                class="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-32 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                3 seconds to answer</span>
            <label htmlFor="inline-3-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hard</label>
          </div>
          </a>
        </div>

    )

}