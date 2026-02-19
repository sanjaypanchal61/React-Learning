import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()

    const handleCLick = () => {
      navigate("/contact")
    }

    return (
        <div>
            <Outlet />
            <h1>About page</h1>
            <button onClick={handleCLick}>move to contact page</button>
        </div>
    )
}

export default About
