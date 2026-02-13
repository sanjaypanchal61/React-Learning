import React, { useState } from 'react'

const UseStateWithObject = () => {
    const [data, setData] = useState({
        id: 1,
        userName: "roy",
        age: 22
    })

    return (
        <div>
            {/* access object */}
            <p>ID: <span style={{ color: "red" }}>{data.id}</span></p>
            <p>NAME: <span style={{ color: "red" }}>{data.userName}</span></p>
            <p>AGE: <span style={{ color: "red" }}>{data.age}</span></p>

            {/* update obejct */}
            <button onClick={() => {
                setData((prev) => ({
                    ...prev,
                    id: 2, userName: "Jack", age: 35
                }))
            }}>Change Data</button>
        </div>
    )
}

export default UseStateWithObject
