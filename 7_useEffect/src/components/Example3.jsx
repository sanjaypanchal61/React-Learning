// import React, { useEffect, useState } from 'react'

// const Example3 = () => {
//     const obj = [
//         {
//             "id": 1,
//             "title": "Red"
//         },
//         {
//             "id": 2,
//             "title": "Green"
//         },
//         {
//             "id": 3,
//             "title": "White"
//         },
//         {
//             "id": 4,
//             "title": "Blue"
//         },
//         {
//             "id": 5,
//             "title": "Orange"
//         }
//     ]
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false)
//         }, 1000)
//     }, [])


//     if (loading) {
//         return <p style={{fontSize:"2rem",color:"red"}}>Loading...</p>;
//     }

//     return (
//         <div>
//             <h1>Color List</h1>
//             <ul>
//                 {
//                     obj.map((user) => (
//                         <li key={user.id}>{user.title}</li>
//                     ))
//                 }
//             </ul>

//         </div>
//     )
// }

// export default Example3
