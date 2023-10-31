import { useEffect,useState } from "react";

function TodoApp_pagination(){
    const [data ,setdata] = useState([]);
    const [load,setload] = useState(false);
    const [page,setpage] = useState(1)
    const [err,seterr] = useState(null)

    async function fetchdata(){
        try {
            setload(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}`)
            const data = await response.json();
            console.log(data)
            setload(false);
            setdata(data)
            
        } catch (error) {
            console.log("error api //////////")
            seterr(error)
        }

    }

    useEffect(()=>{
        fetchdata()
    },[page])

    if(load==true){
        return <div><h1>Loading...</h1></div>
    }

    if(err==true){
        return <div><h1>Error : {err}</h1></div>
    }
    
    return(
        <>
            <h1>Todo list</h1>
            {/* <button onClick={fetchdata} >Fetch</button> */}
            <ul>
                {
                    data.map((elm)=>(
                        <li key={elm.id}>{elm.title}</li>
                    ))
                }
            </ul>

            <button onClick={()=>setpage(count=>count-1)} disabled={page===1}>Prev</button>
            <span> Page {page} </span>
            <button onClick={()=>setpage(count=>count+1)}>Next</button>
        </>
    )
}

export default TodoApp_pagination;