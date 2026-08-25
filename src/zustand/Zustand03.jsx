import React, { useEffect } from 'react';
import usePostStore from './store/usePostStore';

const Zustand03 = () => {
    const {posts, isLoading, error, fetchPosts, clearPosts} = usePostStore()
    
    useEffect(() => {
       fetchPosts()
    }, [fetchPosts])
    

    const postList = posts.map(({title}, i) => (
        <li key={i}>{title}</li>
    ))

    if(isLoading) return <div>로딩중...</div>
    if(error) return <div>데이터 fetching 에러</div>



    return (
        <div>
            <ul>
                <button onClick={clearPosts}>초기화</button>
                <button onClick={fetchPosts}>새로고침</button>
                {postList}
            </ul>
        </div>
    );
};

export default Zustand03;