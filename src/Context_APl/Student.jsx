import Subject from "./Subject";

function Student(){
    return(
        <div style={{ backgroundColor: "grey", padding: 10 }}>
            <h1>Student Component</h1>
            <Subject />
        </div>
    )
}

export default Student;