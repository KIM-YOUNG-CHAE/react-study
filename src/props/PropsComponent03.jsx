import React from 'react';

// 자식 요소를 props로 받기

const PropsComponent03 = ({children}) => {
    return (
        <>
            <p>
                안녕히가세요!
            </p>
             {children}
        </>
    );
};

export default PropsComponent03;