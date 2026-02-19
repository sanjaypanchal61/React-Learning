import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()

    const handleCLick = () => {
      navigate("/")
    }

    return (
        <div>
            <h1>Contact page</h1>
            <button onClick={handleCLick}>move to home page</button>
        </div>
    )
}

export default Contact
