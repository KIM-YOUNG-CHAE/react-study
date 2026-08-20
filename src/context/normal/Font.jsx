import React, { useContext, useState } from 'react';
import FontSizeContext from './FontSizeContext';

const Font = () => {
    const [value, setValue] = useState("")
    const {state, actions} = useContext(FontSizeContext)
    const {style} = state
    const {setStyle} = actions
    const {color, fontSize} = style

    const handleFontsizeOnClick = () => setStyle({...style, fontSize:"100px"})
    const handleColorOnClick = () => setStyle({...style, color:value})
    const handleValueOnChange = (e) => setValue(e.target.value)

    // context 사용!
    // 사용자가 입력한 후 변경 버튼을 누르면
    // 사용자가 입력한 컬러로 h1의 내용을 변경시키기

    return (
        <div>
            <h1 style={style}>context! 완료😎</h1>
            <div>
                <span>컬러 입력</span>
                <input type="text" value={value} onChange={handleValueOnChange}/>
            </div>
            <button onClick={handleColorOnClick}>컬러 변경</button>
            <button onClick={handleFontsizeOnClick}>크기 100px로 변경</button>
        </div>
    );
};

export default Font;