import React from 'react'

export default function PlaySoundButton(props){
    return(
        <button className='mt-3 scale-150'
            onClick={props.playSound}>
            {props.volumeIcon}
        </button>
    )
}