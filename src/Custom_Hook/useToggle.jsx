import React, { useState } from 'react'

const useToggle = (defaultVal) => {
    const [value,setValue]=useState(defaultVal);

    function toggleValues(val){
        if(typeof val!='boolean'){
            setValue(!value)
        }else{
            setValue(val)
        }
    }
  return [value,toggleValues];
}

export default useToggle
