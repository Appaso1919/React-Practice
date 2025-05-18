import React, { useCallback, useState } from 'react'

const UseCallback = () => {
    const[count, setCount] = useState(0);

    const showAlert = useCallback(()=>{
        alert('You clicked ${count} times ');
    },[count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count +1)}>Increase</button>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
}

export default UseCallback
