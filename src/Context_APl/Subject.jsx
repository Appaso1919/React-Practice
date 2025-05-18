import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject(){
    const subject=useContext(SubjectContext);
    return(
        <div style={{ backgroundColor: "red", padding: 10 }}>
            <h1>Subjec is :{subject}</h1>
        </div>
    )
}

export default Subject;