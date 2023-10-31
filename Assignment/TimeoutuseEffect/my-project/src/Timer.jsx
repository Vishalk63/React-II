import { useState,useEffect } from "react";

function Timer(){
  const [count,setcount] = useState(0);

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setcount(count+1)
    },1000)

    return ()=>{
      clearTimeout(timer)
    }

  },[count])



    return(
        <>
            <h1>Timer {count}</h1>            
        </>
    )
}

export default Timer;