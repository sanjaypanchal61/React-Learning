import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleCLick = () => {
      navigate("/about")
    }

    return (
        <div>
            <h1>home page</h1>
            <button onClick={handleCLick}>move to about page</button>
        </div>
    )
}

export default Home
