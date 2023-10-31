import { useState,useEffect } from "react";
function Timer(){
    const [count,setcount] = useState(0)

    useEffect(()=>{
  
      let timer = setInterval(function(){
        setcount((prevCount)=>prevCount+1)
      },1000);
  
  // ------------ clean-up ------------
  
      return ()=>{
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