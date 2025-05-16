import Student from "./Student_use_nested_loop";

const Collage=({college})=>{
    return(
        <div style={{
            backgroundColor:"gray",
            padding:"20px",
            borderBottom:"2px solid #000",
            margin:"20px",
            borderRadius:"10px"
        }}>
            <h3>Name:{college.name}</h3>
            <ul>
              <li>
                <h3>City: {college.city}</h3>
              </li>
              <li>
                <h3>Website: {college.website}</h3>
              </li>
              <li>
                <Student student={college.student}/>
              </li>
            </ul>
        </div>
    )
}

export default Collage; 