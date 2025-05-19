import React, { Fragment } from 'react'

const Simple_example = () => {
  return (
    <Fragment>
        <h3>Hello</h3>
        <Simple/>
    </Fragment>
  )
}

export default Simple_example;


export function Simple(){
    return(
        <>
        <h3>Appaso</h3>
        </>
    )
}