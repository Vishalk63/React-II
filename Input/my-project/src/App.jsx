import { useState } from 'react'
import './App.css'

function App() {
const [text,setText] = useState("")

function updateState(event){
  setText(event.target.value)
}


  return (
    <>
    <div className="parent">
      <input type="text" onChange={updateState} value={text} placeholder='Search...'/>
      <button onClick={()=>{setText("")}}>CLEAR</button>
    </div>

      <h2>{text}</h2>
    </>
  )
}

export default App
