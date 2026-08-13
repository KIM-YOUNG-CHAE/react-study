import React, { useRef, useState } from 'react';

const Name = () => {

    const [result, setResult] = useState("")
    const pRef = useRef()
    
    const handleResultOnChange = (e) => setResult(e.target.value)
    const putNim = () => {
        setResult(pRef.current?.innerText + "님")
    }

    return (
        <div>
            <input type="text" placeholder="이름을 입력하세요" onChange={handleResultOnChange}/>
            <p ref={pRef}>{result}</p>
            <button onClick={putNim}>완료 버튼</button>
        </div>
    );
};

export default Name;