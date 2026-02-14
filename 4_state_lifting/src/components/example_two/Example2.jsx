import React, { useState } from 'react'
import Example2Child from './Example2Child'
import List from './List'

const Example2 = () => {
    const [data, setData] = useState('')

    const fruits = [
        "Apple",
        "Banana",
        "Mango",
        "Orange",
        "Grapes",
        "Pineapple",
        "Papaya",
        "Watermelon",
        "Strawberry",
        "Kiwi",
        "Coconut",
        "Cherry",
        "Pear"
    ];


    return (
        <div>
            <Example2Child data={data} setData={setData} />
            <List data={data} fruits={fruits} />
        </div>
    )
}

export default Example2
