import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Tanstack01 = () => {

    // 데이터를 요청해서 가져오기
    const getUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok) throw new Error("데이터 fetching 실패")
        const users = await res.json()
        return users
    }

    // 데이터를 가져올 때(GET)
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey:["users"],
        queryFn:getUsers
    })

    const userList = data?.map(({name}, i) => (
        <li key={i}>{name}</li>
    ))

    if(isLoading) return <div>로딩중...</div>
    if(isError) return <div>알 수 없는 오류 발생</div>

    return (
        <div>
            <button onClick={() => refetch().then(res => console.log("재요청완료", res))}>새로고침</button>
            <ul>
                {userList}
            </ul>
        </div>
        
    );
};

export default Tanstack01;