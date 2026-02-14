import React from 'react'

const List = ({data,fruits}) => {
 
  const filtered = fruits.filter((item) => item.toLowerCase().includes(data.toLowerCase()))

    return (
        <div>
            <h3>------------ITEMS LIST------------</h3>
            <ul>
                {filtered.map((fruit, i) => (
                    <li key={i}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default List
