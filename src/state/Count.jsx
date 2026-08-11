import React, { useState } from 'react';

const Count = () => {
    const [num, setNum] = useState(10)

    const increase = () => setNum(num + 1)
    const decrease = () => setNum(num - 1)

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>+1증가</button>
            <button onClick={decrease}>-1증가</button>
        </div>
    );
};

export default Count;