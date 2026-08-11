import React, { useState } from 'react';

const Name = () => {
    // 사용자가 이름을 입력하고 엔터를 치면 화면에 이름을 출력하기
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const handleNameOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleKeyOnkeyDown = (e) => {
        if(e.key === "Enter"){
            setName(value)
        }
    }

    return (
        <div>
            <p>{name}</p>
            <input type="text" onChange={handleNameOnChange} onKeyDown={handleKeyOnkeyDown} />
        </div>
    );
};

export default Name;