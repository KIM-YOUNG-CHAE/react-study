import React from 'react';

const PropsComponent01 = ({name, age, hobby}) => {
    // 구조분해할당
    // const {name, age, hobby} = props

    return (
        <div>
            이름 : {name}님<br />
            나이 : {age}살<br />
            취미 : {hobby}
        </div>
    );
};

export default PropsComponent01;