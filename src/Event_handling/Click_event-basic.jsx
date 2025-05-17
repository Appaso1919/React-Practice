import { useState } from "react"

function Click_event(){
    const [count,setCount]= useState(0);

    const HandleClick=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h3>You Clicked count {count} time</h3>
            <button onClick={HandleClick}>Click me</button>
        </div>
    )
}

export default Click_event;