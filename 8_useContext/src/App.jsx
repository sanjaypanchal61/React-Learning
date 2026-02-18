import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'

export const UserContext = createContext()

const App = () => {
  const [data , setData] = useState("Roy") 

  return (
    <div>
      <UserContext.Provider value={data}>
        <ChildA />
      </UserContext.Provider>
    </div>
  )
}

export default App;
