import React, { useEffect, useState } from 'react'
import userData from '../utils/data'
import axios from 'axios'

const Example1 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const apiData = async () => {
            try {
                const res = await axios.get(userData)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        apiData()
    }, [])


    return (
        <div>
            <h1>Fruits List</h1>

            <ul>
                {
                    userData.map((item, i) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Example1
