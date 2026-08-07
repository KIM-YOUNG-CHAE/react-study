import React from 'react';

// jsx문법은 if문을 사용할 수 없다. 삼항연산자를 지원한다.
// 삼항연산자
// - 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
// && 연산자는 앞의 조건식이 false이면 뒤를 실행하지 않으며,
// false라는 값은 랜더링 되지 않는다. 앞의 조건식이 모두 true라면 뒤에 JSX를 랜더링한다.

const Jsx04 = () => {

    const name = undefined || "홍길동"
    const login = true
    const guest = true

    return (
        <div>
            {login && guest && (
                <>게스트 로그인입니다.</>
            )}
            {login ? (
                <>{name}님 환영합니다</>
            ) : (
                <>비회원님 환영합니다</>
            )}
        </div>
    );
};

export default Jsx04;