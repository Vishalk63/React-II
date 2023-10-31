import './App.css'
import { useState } from 'react'

function App() {

  const [inputval, setinputval] = useState("");
  const [list, setlist] = useState([]);

  function inputchange(e) {
    setinputval(e.target.value)
  }

  function addtodo() {
    
    if(inputval==""){
      alert("Empty Input")
    }else{
      let obj = {
        task: inputval,
        status: false,
        id: Math.random()
      }
  
      let newtodo = [...list, obj];
      setlist(newtodo);
      setinputval("")
    }
  }

  function mydelete(id){
    const del = list.filter((elm)=>{
      if(elm.id===id){
        return null;
      }
    })
    setlist(del)
  }

  function toggle(id){
    const tog = list.map((elm)=>{
      if(elm.id===id){
        return {...elm,status:!elm.status};
      }
    })

    setlist(tog);
  }


  return (
    <>
      <h1>Todo App</h1>
      <input type="text" placeholder='Enter Todos' value={inputval} onChange={inputchange} />
      <button onClick={addtodo}>ADD</button> <br/> <br />
      <hr/>

      {
        list.map((elm) => (
          <div key={elm.id} className='card'>
            <h2>{elm.task}</h2>
            <h2>{elm.status?"Complete":"Not Complete"}</h2>
            <button onClick={()=>toggle(elm.id)}>Toggle</button>
            <button onClick={()=>mydelete(elm.id)}>Delete</button>
          </div>
        ))
      }



    </>
  )
}

export default App
