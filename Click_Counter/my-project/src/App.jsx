import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("useEffect called when state update")
  },[count])

  function myfun(){
    setCount(count+1)
    document.title = `Count ${count+1}`
  }
  

  return (
    <>
      <h2>{count} </h2>
      <button onClick={myfun}>Click me</button>
    </>
  )
}

export default App
