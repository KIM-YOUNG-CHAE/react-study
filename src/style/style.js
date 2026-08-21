import styled from 'styled-components';
import { flexCenterRow } from './globals/common';

export const Box = styled.div`
    width: 100px;
    height: 200px;
    border: solid 1px black;
`

export const Btn = styled.button`
    width: 100px;
    height: 60px;
    background-color: green;
    color: white;
`

// 일반 컴포넌트와, StyledButton -> 네이밍으로 해결
// export 100번 X -> 객체 담아서 한 번에

const S = {}

    S.Box = styled.div`
        width: 100px;
        height: 200px;
        border: solid 1px black;
    `

    S.Btn = styled.button`
        width: 100px;
        height: 60px;
        background-color: green;
        color: white;
    `

    S.TriggerButton = styled.button`
        border: none;
        width: 100px;
        height: 60px;
        background-color: ${({bgColor}) => bgColor};
    `

    S.FlexWrap = styled.div`
       ${flexCenterRow}
    `

    S.FlexBox = styled.div`
        width:100px;
        height:100px;
        background-color:orange;
    `


export default S