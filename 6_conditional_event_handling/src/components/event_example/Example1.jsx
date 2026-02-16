import React, { useState } from 'react'

const Example1 = () => {
    const [count,setCount] = useState(1)

    const handleClick = () => {
      console.log(`button clicked ${count} time`)
      setCount((prev) => prev + 1)
    } 

  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Example1
