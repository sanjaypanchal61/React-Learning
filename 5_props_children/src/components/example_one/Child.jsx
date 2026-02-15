import React from 'react'

const Child = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

      {/* access children */}
      <h1 style={{ backgroundColor: "black", color: "white" }}>Children Data</h1>
      <p>{props.children}</p>
      
    </div>
  )
}

export default Child
