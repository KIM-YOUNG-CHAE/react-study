// 프로젝트에 모두 적용되어야 하는 파일들을 설정하는 파일

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-Light.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('${process.env.PUBLIC_URL}/assets/font/pretendard/woff2/Pretendard-Black.woff2') format('woff2');
    font-weight: 900;
    font-display: swap;
}

*{
    font-family:"Pretendard";
    box-sizing:border-box;
    letter-spacing:-0.2px;
    color:#131313;
}

button{
    cursor:pointer;
}
`


export default GlobalStyle