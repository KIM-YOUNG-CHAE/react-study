import React, { useState } from 'react';

const UserData = () => {

    const [user, setUser] = useState({
        name: "홍길동",
        age: 20,
        address: "서울시 강남구",
        phone: "010-1234-1234"
    })
    
    const [name, setName] = useState("")
    const handleNameOnChange = (e) => setName(e.target.value)
    const handleUserOnClick = (e) => {
        setUser({
            ...user,
            name: name,
        })
    }

    return (
        <div>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
            <p>주소: {user.address}</p>
            <p>전화: {user.phone}</p>
            <hr />
            <input type="text" placeholder="이름을 입력하세요" onChange={handleNameOnChange}/>
            <button onClick={handleUserOnClick}>변경</button>
        </div>
    );
};

export default UserData;