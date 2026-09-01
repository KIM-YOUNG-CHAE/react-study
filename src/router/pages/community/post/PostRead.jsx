import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import getDatas from '../_function/getDatas';

const PostRead = () => {

    const path = useLocation().pathname

    // useParams() : url 파라미터를 가져오는 훅 함수
    const {id} = useParams()
    const fetch_url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const [post, setPost] = useState({})

    useEffect(() => {
        getDatas(fetch_url)
            .then(setPost)
    }, [path])

    console.log("post", post)
    
    // `https://jsonplaceholder.typicode.com/posts/${id}`

    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostRead;