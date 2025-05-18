import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <input ref={inputRef} type='text' placeholder='Type somethink...' />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    )
}

export default UseRef
