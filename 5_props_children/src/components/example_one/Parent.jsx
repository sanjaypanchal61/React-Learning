import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      
      {/* wrap children */}
      <Child>
        <h1>id = 1</h1>
        <h2>name = Rahul</h2>
        <h3>age = 23</h3>
      </ Child>

      <Child>
        <h1>id = 2</h1>
        <h2>name = Aman</h2>
        <h3>age = 26</h3>
      </ Child>

    </div>
  )
}

export default Parent
