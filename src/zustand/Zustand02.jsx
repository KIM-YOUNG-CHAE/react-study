import React from 'react';
import useCountStore from './store/useCountStore';

const Zustand02 = () => {

    const {count, increase, decrease} = useCountStore(state => state)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrease}>-1 감소</button>
            <button onClick={increase}>+1 증가</button>
        </div>
    );
};

export default Zustand02;