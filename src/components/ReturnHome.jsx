import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function ReturnHome(){

    const homeIcon = <FontAwesomeIcon icon={faHouse} />


    return(
    <form>
        <button
            className='text-slate-400 absolute bottom-0 right-0 h-16 w-16'
            type="submit"
        >
            {homeIcon}
        </button>
      </form>

    )
}