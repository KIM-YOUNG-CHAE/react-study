import React from 'react';

const Food = ({food}) => {
    // 객체로 구조분해할당해서 가지고왔는데 한번 더 아래처럼 구조분해할당 하는 이유는 변수가 많으면 유지보수측면에서 불안정하기때문인듯
    const {id, name} = food
    return (
        <li>{name}</li>
    );
};

export default Food;