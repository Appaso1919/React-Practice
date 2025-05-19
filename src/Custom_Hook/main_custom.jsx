import React from 'react'
import useToggle from './useToggle'

const Main_custom = () => {
    const [value,toggleValues]=useToggle(true)

    const [data,setData]=useToggle(true)
  return (
    <>
    <div>
      <button onClick={toggleValues}>Taggle Heading</button>
      <button onClick={()=>toggleValues(false)}>Hide Heading</button>
      <button onClick={()=>toggleValues(true)}>Show Heading</button>
      
      {
        value? <h1>Custom hooks in React </h1>:null
      }
      <hr/>
      
        <button onClick={setData}>Taggle Heading</button>
      <button onClick={()=>setData(false)}>Hide Heading</button>
      <button onClick={()=>setData(true)}>Show Heading</button>
      
      {
        data? <h1>Second Heading </h1>:null
      }
    </div>
    </>
  )
}

export default Main_custom
