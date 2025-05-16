import { useEffect, useState } from "react";

function Timer(){
    const [count, setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            console.log("count number is ${count}");
        },[count]);
    });
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}

export default Timer;