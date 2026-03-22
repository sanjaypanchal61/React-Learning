import React from 'react'
import useUser from '../../customHook/useUser'

const A = () => {

    return (
        <div>
            <p>{useUser() ? "🟢" : "🔴"}</p>
        </div>
    )

}

export default A
