import React from 'react'

const ChildLayout = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection:'column',gap:'1rem' ,justifyContent: "center", alignItems: 'center', height: "100vh" }}>

            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between' ,border: '2px solid black', width: '500px', height: "500px", backgroundColor: "blue", color: 'white' }}>

                <div style={{backgroundColor:'red',display:'flex',justifyContent:"center",fontWeight:"bold",fontSize:"2rem"}}>
                    <header>Home | About | Contact</header>
                </div>

                <div style={{fontWeight:'bold',fontSize:'1.5rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <main>{props.children}</main>
                </div>

                <div style={{backgroundColor:'black',display:'flex',justifyContent:"center",fontWeight:"bold",fontSize:"2rem"}}>
                    <footer>This is Footer</footer>
                </div>
            </div>

        </div>
    )
}

export default ChildLayout
