import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const Post = () => {

    const {datas} = useOutletContext()
    const postList = datas.map(({id, title}, i) => (
        <Link to={`/community/post/read/${id}`} key={i}>{title}</Link>
    ))

    return (
        <div>
            <ul>
                {postList}
            </ul>
        </div>
    );
};

export default Post;