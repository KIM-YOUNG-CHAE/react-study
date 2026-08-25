import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

// https://jsonplaceholder.typicode.com/posts


const Tanstack02 = () => {

    const [page, setPage] = useState(0)
    const limit = 10

    const getPosts = async () => {
        const res = await fetch(`
            https://jsonplaceholder.typicode.com/posts?_start=${page * limit}&_limit=${limit}
        `)
        if(!res.ok) throw new Error("fetching 실패")
        const datas = await res.json()
        return datas
    }

    const {data, isLoading, isError, error, isFetching, refetch} = useQuery({
        queryKey:["post", page],
        queryFn:getPosts,
        keepPreviousData:true
    })

    const isFirstPage = page === 0
    const hasNextPage = data?.length - 1 === page

    const postList = data?.map(({title}, i) => (
        <li key={i}>{title}</li>
    ))

    console.log(data)

    return (
        <div>

            <ul>
                {postList}
            </ul>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={isFirstPage}>이전</button>
                <button onClick={() => setPage(page + 1)} disabled={hasNextPage}>다음</button>
            </div>
        </div>
    );
};

export default Tanstack02;