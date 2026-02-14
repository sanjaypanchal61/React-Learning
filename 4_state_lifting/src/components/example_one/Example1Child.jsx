import React from 'react'

const Example1Child = ({data,setData}) => {
    return (
        <div>
            Child-Input: <input type="text" placeholder='enter input...' onChange={(e) => setData(e.target.value)}/>
            <p>Child Data:{data}</p>
        </div>
    )
}

export default Example1Child
