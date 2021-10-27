import React, {useState} from "react";

const Counter = () =>{
    const [counter, setCounter] = useState(0)

    const onButtonClick = () =>{
        setCounter(counter + 1)
    }
    return(
        <div>
            <h2>Thick the button to could</h2>
            <button className='ui button'
                onClick = {() =>{
                    onButtonClick()
                }}
            >Click Me! </button>
            <h1>Current Count is : {counter} </h1>
        </div>
    )
}

export default Counter