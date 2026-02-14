import React, { useState } from 'react'

const Example2Child = ({data,setData}) => {
    return (
        <div>
            Filter-Input: 
            <input type="text" placeholder='type fruit name...' value={data} onChange={(e) => setData(e.target.value)} />
        </div>
    )
}

export default Example2Child
