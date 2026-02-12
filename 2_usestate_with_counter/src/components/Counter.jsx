import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)

    return (
        <>
            <div style={{ height: "90vh", width: "90vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <h1 style={{ backgroundColor: "darkorchid", color: "white", padding: "10px", borderRadius: "5px" }}>Counter App</h1>

                <div style={{ backgroundColor: "darkkhaki", borderRadius: "5px", width: "500px", height: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",gap:"10px" }}>

                    <div>
                        <p style={{ backgroundColor: "black", color: "white", padding: "10px", borderRadius: "5px" }}>count : {value}</p>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button style={{ cursor: "pointer", border: "1px solid black", borderRadius: "5px", backgroundColor: "lavender", fontWeight: "bold", height: "50px", width: "100px" }} onClick={() => setValue((prev) => prev + 1)}>Increment</button>

                        <button style={{ cursor: "pointer", border: "1px solid black", borderRadius: "5px", backgroundColor: "lavender", fontWeight: "bold", height: "50px", width: "100px" }} onClick={() => setValue(0)}>Reset</button>

                        <button style={{ cursor: "pointer", border: "1px solid black", borderRadius: "5px", backgroundColor: "lavender", fontWeight: "bold", height: "50px", width: "100px" }} onClick={() => setValue((prev) => prev - 1)}>Decrement</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Counter
