import React, { useState } from 'react';

// 취미
// 축구, 농구, 야구 버튼을 각각 만들고
// 축구 버튼을 누르면 "축구"를 출력
// 야구 버튼을 누르면 "야구"를 출력
// 농구 버튼을 누르면 폰트 크기를 50px로 변경

const Hobby = () => {
    
    const[hobby, setHobby] = useState("")
    const[font, setFont] = useState("")

    const handleHobbyOnclick = (e) => {
        setHobby(e.target.innerText)
    }
    const handleFontOnClick = (e) => {
        setFont("50px")
    }

    return (
        <div>
            <p style={{fontSize:font}}>{hobby}</p>
            <button onClick={handleHobbyOnclick}>축구</button>
            <button onClick={handleHobbyOnclick}>야구</button>
            <button onClick={handleFontOnClick}>농구</button>
        </div>
    );
};

export default Hobby;