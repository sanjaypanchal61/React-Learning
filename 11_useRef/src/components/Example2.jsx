import React, { useRef, useState } from 'react'

const Example2 = () => {
    const [value, setValue] = useState(0)
    let demoRef = useRef(0)

    const handleClick = () => {
        setValue(prev => prev + 1)
        demoRef.current = demoRef.current + 1
        console.log("Demo value: " + demoRef.current)
    }

    return (
        <div>
            <h1>count : {value}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Example2
