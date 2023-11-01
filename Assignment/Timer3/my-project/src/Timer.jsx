import { useEffect,useState } from "react";
function Timer(){

    const[count,setcount] = useState(0)
    useEffect(()=>{
        let timer = setInterval(()=>{
            setcount((prevCount)=>prevCount+1)
            console.log("Interval Running in Background")
        },1000)

// ------------ Clean-up ----------
        return()=>{
            clearInterval(timer)
        }
    },[])
    return(
        <>
            <h1>Timer {count}</h1>
        </>
    )
}

export default Timer;