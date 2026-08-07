import React from 'react';

// 1) 유저의 데이터를 props로 컨테이너에서 받기
// 2) 유저의 이름을 style에 컬러로 적용시키기
const PropsComponent02 = ({user}) => {
    const {name, age, style, hobby} = user
    console.log(name, age, style, hobby)
    
    // style
    // {color: "blue"}

    // JSX
    // style={{color: blue, fontSize: 20px}}

    return (
        <div>
            <p style={style}>{name}</p>
        </div>
    );
};

export default PropsComponent02;