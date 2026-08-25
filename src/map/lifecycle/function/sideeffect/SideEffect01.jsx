import React, { useEffect, useState } from 'react';

const SideEffect01 = () => {
    const [number, setNumber] = useState(0)
    const [color, setColor] = useState("#000")
    const increase = () => setNumber(number + 1)
    const handleColorOnClick = () => setColor((snapshot) => {
        console.log("이전 값:", snapshot)
        if(number % 5 !==0){
            return "#" + Math.floor(Math.random() * 16777215).toString(16)
        }
        return null
    })

    useEffect(() => {
        console.log("리랜더링!")
        console.log("color: ", color)
        console.log("number: ", number)
    }, [])

    return (
        <div>
            <h1 style={{color}}>{number}</h1>
            <button onClick={increase}>+1 증가</button>
            <button onClick={handleColorOnClick}>컬러 변경</button>
        </div>
    );
};

export default SideEffect01;