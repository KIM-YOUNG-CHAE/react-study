import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';

// 인피니티 스크롤
// https://jsonplaceholder.typicode.com/comments
const Tanstack03 = () => {
    
    const limit = 10;
    const observerRef = useRef(null)

    const getComments = async ({ pageParam = 0 }) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${pageParam}&_limit=${limit}`)
        return await res.json()
    }

    const {
        data, 
        fetchNextPage, // 다음 페이지 요청
        hasNextPage, // 다음 페이지가 있는지 여부
        isFetchingNextPage, 
        isLoading,
        isError,
        error
    } = useInfiniteQuery({
        queryKey: ["comments"],
        queryFn: getComments,
        getNextPageParam: (lastPage, allPages) => lastPage.length === limit ? allPages.length * limit : undefined
    })

    useEffect(() => {

        if(!observerRef.current) return;
        // 감지 객체
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasNextPage && !isFetchingNextPage){
                fetchNextPage()
            }
        }, {
            rootMargin: "100px"
        })

        const currentRef = observerRef.current;
        observer.observe(currentRef)

        return () => {
            observer.unobserve(currentRef)
        }

    }, [data, hasNextPage, fetchNextPage, isFetchingNextPage])


    console.log(data)
    const commentList = data?.pages.map((page, pageIndex) => (
        page.map(({name, id}) => (
            <li key={`${pageIndex}-${id}`}>{name}</li>
        ))
    ))

    return (
        <div>
            <h1>게시글 목록(인피니티 스크롤)</h1>
            <ul>{commentList}</ul>
            <div ref={observerRef} style={{height: "1px"}}></div>
            {isFetchingNextPage && <p>더 불러오는 중입니다...</p>}
            {!hasNextPage && <p>마지막 페이지입니다</p>}
        </div>
    );
};

export default Tanstack03;