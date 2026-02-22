import React, { useRef } from 'react'

const Example1 = () => {
    const inputRef = useRef(null)

    const handleFocus = () => {
        inputRef.current.focus()
    }

    handleFocus

  return (
    <div>
       <input ref={inputRef} type="text" placeholder='Enter name...'/> 
       <button onClick={handleFocus}>click to focus</button>
    </div>
  )
}

export default Example1
