import React,{useState} from "react"

//Renders the WaniKani Mnemonic image contained in the kana array
export default function KanaMnemonic(props){

    const [scaleUpImage, setScaleUpImage] = useState(false);

    function handleScale(){
        setScaleUpImage(prev=>!prev)
    }

    return(
        <div className="text-3xl font-bold mb-2">
            <img 
                width="325px" 
                height="335px" 
                className={ scaleUpImage ? "transition scale-125" : "transition scale-75"}
                src={props.kana[props.current].image}
                onClick={handleScale}
            />
        </div>
    )
}