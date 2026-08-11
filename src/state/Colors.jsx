import React, { useState } from 'react';


// 1. 빨간색 버튼을 누르면 글자색을 빨갛게
// 2. 파란색 버튼을 누르면 글자색을 파랗게
// 3. 핑크색 입력 시 글자색을 없앤다.
const Colors = () => {
    
    const [color, setColor] = useState("")
    const [value, setValue] = useState("")

    const handleColorOnClick = (e) => {
        setColor(e.target.innerText.includes("빨간") ? "red" : "blue")
    }
    const handleColorOnChange = (e) => {
        const value = e.target.value
        if(value === "핑크색"){
            setColor("")
        }
        setValue(value)
    }

    return (
        <div>
            <p style={{color}}>{value}</p>
            <input onChange={handleColorOnChange} />
            <button onClick={handleColorOnClick}>빨간색 버튼</button>
            <button onClick={handleColorOnClick}>파란색 버튼</button>
        </div>
    );
};

export default Colors;