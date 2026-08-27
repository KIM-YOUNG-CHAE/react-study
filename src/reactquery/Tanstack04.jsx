import { useQuery } from '@tanstack/react-query';
import React from 'react';


// select

const Tanstack04 = () => {

    
    const getPosts = async () => {
        const res = await fetch(`
            https://jsonplaceholder.typicode.com/posts
        `)
        if(!res.ok) throw new Error("fetching 실패")
        const datas = await res.json()
        return datas
    }

    const {data} =  useQuery({
        queryKey:["posts"],
        queryFn:getPosts,
        select: (data) => data?.map((post) => post.title),
        staleTime: 1000 * 60 * 60 * 24 // 하루 뒤 (캐싱 후 재요청 처리)
    })

    console.log(data)

    const titles = data?.map((title, i) => (
        <li key={i}>{title}</li>
    ))

    return (
        <div>
            <ul>{titles}</ul>
        </div>
    );
};

export default Tanstack04;