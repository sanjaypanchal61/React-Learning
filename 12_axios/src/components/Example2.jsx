import React from 'react'
import axios from 'axios'

// axios instance
const Example2 = () => {
    const api = axios.create({
        // set base URL
        baseURL: "",
    })

    // dyrect use
    api.get("").then((res) => res.data)

    return (
        <div>
            <h3>Axios Instance Example</h3>
        </div>
    )
}

export default Example2
