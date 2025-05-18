import React, { createContext, useContext } from 'react';

// Step 1: Create the Context
const UserContext = createContext();

function ChildComponent() {
  const user = useContext(UserContext);
  return <h2>Hello, {user}</h2>;
}

export function User(){
    return(
        <UserContext.Provider value="Appaso">
            <ChildComponent />
        </UserContext.Provider>
    )
}
export default ChildComponent;