import React from 'react'

// receive props
const Props_receive = (props) => {
    // destructure props
    const { name, age } = props
    return (
        <div>
            <h1>name : {name}</h1>
            <p>age : {age}</p>
        </div>
    )
}

export default Props_receive
