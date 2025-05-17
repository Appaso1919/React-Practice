function UserList(){
    const users =[
        {id: 1, name:"Appaso"},
        {id: 2, name:"Ajay"},
        {id: 3, name:"Prithm"}
    ]
    return(
        <div>
            <ul>
                {users.map(user =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;