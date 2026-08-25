import React, { useEffect, useState } from 'react';

const SideEffect02 = () => {
    // 비동기처리
    // 몇초마다: setInterval(() => {}, 3초마다)
    // setInterval(() => {}, 3000)
    // 몇초이후: setTimeout(() => {}, 3초후에)
    // setTimeout()
    const [number, setNumber] = useState(0)
    const [color, setColor] = useState("#000")

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("setInterval")
            setNumber(number + 1)
        }, 1000)

        // 클린업
        return () => {
            clearInterval(timer)
        }
    })
    
    console.log("리랜더링", color)
    
    return (
        <div>
            <h1>{number}</h1>
        </div>
    );
};

export default SideEffect02;