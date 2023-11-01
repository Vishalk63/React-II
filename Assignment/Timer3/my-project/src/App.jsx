import './App.css'
import Timer from './Timer'
import { useState } from 'react'

function App() {
  const[flag,setflag] = useState(true);
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={()=>setflag(!flag)}>{flag?"Hide":"Show"}</button>

      {flag && <Timer/>}
    </>
  )
}

export default App
