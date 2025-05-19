import { useState } from "react";
import Collage from "./Collage";
import { SubjectContext } from "./ContextData";

function Main_context(){
    const [subject,setSubject]=useState('English');
    return(
        <div style={{ backgroundColor: "lightgrey", padding: 10 }}>
           <SubjectContext.Provider value={subject}>
            <select onChange={(event)=>setSubject(event.target.value)}>
                <option value="">Select Option</option>
                <option value="Maths">Maths</option>
                <option value="History">History</option>
                <option value="English">English</option>
            </select>
             <h1>Context API</h1>
            <Collage />
           </SubjectContext.Provider>
        </div>
    )
}

export default Main_context;