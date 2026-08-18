import React, { useEffect, useState } from 'react';

const Infinite = () => {

    const [users, setUsers] = useState([])
    const getDatas = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const datas = await response.json()
        setUsers(datas)
    }
    
    useEffect(() => {
        getDatas()
    }, [])
    
    const userList = users.map(({name}) => (
        <li>{name}</li>
    ))
    
    console.log("리랜더링")

    return (
        <ul>
           {userList} 
        </ul>
    );
};

export default Infinite;