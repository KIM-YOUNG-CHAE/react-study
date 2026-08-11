import React, { useState } from 'react';

const Names = () => {

    // 사용자가 이름을 입력하고 엔터를 누르면 이름을 배열 상태에 넣고 모든 이름들을 하나로 연결해서 출력하기
    // 출력결과
    // 홍길동, 장보고, 이순신
    const [names, setNames] = useState([])
    const [name, setName] = useState("")

    // 사용자의 입력값을 상태로 담아두는 핸들러
    const handleNameOnChange = (e) => {
        setName(e.target.value)
    }

    // 사용자가 엔터를 누르면 Name 상태값을 names에 추가하는 핸들러
    const handleNameOnKeyDown = (e) => {
        if(e.key === "Enter"){
            setNames([...names, name])
        }
    }

    return (
        <div>
            <h1>{names.join(",")}</h1>
            <input
                type="text" placeholder='이름을 입력하세요.' 
                onChange={handleNameOnChange}
                onKeyDown={handleNameOnKeyDown}
            />
        </div>
    );
};

export default Names;