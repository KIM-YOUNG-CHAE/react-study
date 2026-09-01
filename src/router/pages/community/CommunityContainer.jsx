import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import getDatas from './_function/getDatas';


const CommunityContainer = () => {

    const path = useLocation().pathname
    const fetch_url = `https://jsonplaceholder.typicode.com${path.replace("/community", "") + "s"}`

    const [datas, setDatas] = useState([])

    useEffect(() => {
        // 1. url?을 가져올 방법이 없다. -> useLocation으로 해결
        // 2. props를 넘길 자식이 안보인다.
        getDatas(fetch_url)
            .then(setDatas)
    }, [path])

    return (
        <div>
            <div>
                <Link to={"/community/comment"}>코멘트</Link>
                <Link to={"/community/post"}>게시판</Link>
                <Link to={"/community/user"}>유저</Link>
                <Link to={"/community/todo"}>할일</Link>
            </div>
            <div>
                {/* Outlet 라우트에 해당하는 자식요소를 보여주는 컴포넌트 */}
                <Outlet context={{
                    datas: datas
                }} />
            </div>
        </div>
    );
};

export default CommunityContainer;