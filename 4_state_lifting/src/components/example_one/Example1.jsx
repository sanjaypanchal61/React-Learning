import React, { useState } from 'react'
import Example1Child from './Example1Child'

const Example1 = () => {
    const [data, setData] = useState('')

    return (
        <div>
            <p>Parent Data:{data}</p>
            <Example1Child data={data} setData={setData} />
        </div>
    )
}

export default Example1
