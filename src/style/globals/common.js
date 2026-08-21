// 프로젝트의 공통으로 사용되는 css를 저장하는 파일


import { css } from "styled-components";

export const flexCenterRow = css`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const flexCenterColumn = css`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const H1 = css`
    font-size:48px;
    height:900;
    letter-spacing:-0.1px;
`

export const h1Bold = css`
    font-size:${({theme}) => theme.FONT_SIZE["h1"]};
    font-weight:${({theme}) => theme.FONT_WEIGHT["bold"]};
    line-height:${({theme}) => theme.FONT_LINE["h1"]};;
`