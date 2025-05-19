import Student from "./Student";

function ClassComponent(){
    return(
        <div style={{ backgroundColor: "lightorange", padding: 10 }}>
            <h1>class Component</h1>
            <Student />
        </div>
    )
}

export default ClassComponent;