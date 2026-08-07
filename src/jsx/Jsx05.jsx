// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
    const age = 12
    const isAdult = age >= 19
    const isEven = age % 2 === 0
    const enter = isAdult ? <PassComponent/> : <NotPassComponent/>
    const win = isEven ? <LuckyComponent/> : <UnLuckyComponent/>

    return (
        <div>
            당신의 나이는 {age}살 이므로
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;