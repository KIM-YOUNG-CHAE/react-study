import React from 'react';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div>
            메인 페이지
            <Link to={"/hobby"}>취미페이지로 이동</Link>
        </div>
    );
};

export default MainContainer;