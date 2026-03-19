import React from 'react'
import { increment, decrement, incrementByValue } from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <h1>Redux Toolkit Counter</h1>
                <h2>count: {count}</h2>
            </div>

            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <br /><br />
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <br /><br />
                <button onClick={() => dispatch(incrementByValue(5))}>IncrementByValue</button>
            </div>
        </div>
    )
}

export default Counter
