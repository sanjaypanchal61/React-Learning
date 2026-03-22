import React from 'react'
import useUser from '../../customHook/useUser'

const B = () => {

    return (
        <div>
            <h1>User - <i>{useUser() ? "Online" : "Offline"}</i></h1>
        </div>
    )

}

export default B
