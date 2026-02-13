import React, { useState } from 'react'

const UseStateWithArray = () => {
    const [fruits, setFruits] = useState([
        "Apple", "Banana", "Mango"
    ])

    return (
        <div>

            {/* access array */}
            <ul>
                {fruits.map((fruit, idx) => (
                    <li key={idx}>{fruit}</li>
                ))}
            </ul>
            
            {/* update array */}
            <button onClick={() => setFruits((prev) => [...prev, "Orange"])}>Add Fruit</button>

        </div>
    )
}

export default UseStateWithArray