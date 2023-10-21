import { useState } from "react";
import "./Counter.css"

function Counter(){
    const [count,setCount]=useState(0)

    function handleclick(){
        setCount(count+1)
    }
    function handleclick1(){
        setCount(count-1)
    }
    return(
        <div className="parent">
        <h1>Count is {count}</h1>
        <div className="btns">
            <button onClick={handleclick}>Inc</button>
            <button onClick={handleclick1}>Dec</button>
        </div>

        </div>
    )
}

export default Counter;