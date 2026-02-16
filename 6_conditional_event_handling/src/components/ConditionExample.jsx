import React, { useState } from 'react'

const ConditionExample = () => {
    const [login, setLogin] = useState(false)

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10rem" }}>

            <div>
                <button onClick={() => setLogin(!login)} style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px', width: '100px', fontSize: '1.5rem', cursor: "pointer" }}>
                    {login ? "Logout" : "Login"}
                </button>
            </div>

            <div style={{ backgroundColor: "wheat", borderRadius: "10px", padding: "10px" }}>
                {login ? <h2>Welcome User🖐</h2> : <h2>Please Login👆</h2>}
            </div>

        </div>
    )
}

export default ConditionExample
