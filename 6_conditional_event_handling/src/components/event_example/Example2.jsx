import React from 'react'

const Example2 = () => {

    function hello() {
        console.log("Hello");
    }

    return (
        <div>
            {/* Reference */}
            <button onClick={hello}>Click</button>

            {/* Immediately invoked */}
            {/* <button onClick={hello()}>Click</button> */}

            {/* Wrapped call */}
            {/* <button onClick={() => hello()}>Click</button> */}
        </div>
    );
}

export default Example2
