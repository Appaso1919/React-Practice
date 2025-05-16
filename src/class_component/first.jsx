import React from 'react'
import Second from './second';
class First extends React.Component{
    render(){
        return(
            <div>
                <h3>First Component in class</h3>
                <Second />
            </div>
        )
    }
}

export default First;