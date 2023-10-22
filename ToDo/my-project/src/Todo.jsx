import "./Todo.css"
import { useState } from "react";

function Todo (){
    const [text,setText] = useState("");
    const [todolist,setTodolist] =useState([]);

    function textupdate(event){
        setText(event.target.value)
    }

    // ---------------- add ------------
    function addfun(){
        let obj={
            title:text,
            status:false,
            id: Math.random()
        }

        let newTodoList = [...todolist,obj];
        setTodolist(newTodoList)

        setText("")
    }

    // ---------- toggle---------
    function toggle(id){
        const todo_status = todolist.map((elm)=>{
            if(elm.id===id){
                return{...elm,status: !elm.status};
            }else{
                return elm;
            }  
        });
        setTodolist(todo_status);
    }


    // ------------ delete ---------------
    function deletefun(id){
        const del = todolist.filter((elm)=>{
            if(elm.id==id){
                return null;
            }
            else{
                return elm;
            }
        })

        setTodolist(del)
    }

    return(
        <div id="container">
            <h1>Todo List</h1>

            <div className="main">
                <input type="text" value={text} onChange={textupdate} placeholder="Task..." />
                <button onClick={addfun}>ADD</button>
            </div>


            {
                todolist.map((elm,index)=>(
                    
                    <div key={elm.id} className="parent">
                        <h3>{elm.title} - <span style={elm.status?{color:"green"}:{color:"red"} }>{elm.status?"Complete":"Not Complete"}</span> </h3>
                        <div className="btn">
                        <button onClick={()=>toggle(elm.id)}>Toggle</button>
                        <button onClick={()=>deletefun(elm.id)}>Delete</button>
                        </div>
                       
                    </div>

                ))
            }
         
        </div>
    )
}

export default Todo;