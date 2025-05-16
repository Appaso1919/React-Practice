import { useState } from "react";

function Favorite_color(){
    const [color,setColor]=useState("red");
    return(
        <div>
            
            <h3>My favorite color is {color}</h3>
            <button style={{backgroundColor:"blue",
                
            }} onClick={()=>setColor("blue")}>Blue</button>
            <button style={{backgroundColor:"Red"}} onClick={()=>setColor("red")}>Red</button>
            <button style={{backgroundColor:"orange",padding:"10px"
            }} onClick={()=>setColor("orange")}>Orange</button>
            <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        </div>
    )
}

export default Favorite_color;