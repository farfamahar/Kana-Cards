import React from 'react'

//Plays the Kana audio file on click
export default function PlaySoundButton(props){
    return(
        <button className='mt-3 scale-150'
            onClick={props.playSound}>
            {props.volumeIcon}
        </button>
    )
}