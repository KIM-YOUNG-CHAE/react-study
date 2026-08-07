import React from 'react';

const ChildrenH1 = ({style}) => {
    console.log(style)
    return (
        <div>
             <h1 style={style}>안녕하세요!</h1>
        </div>
    );
};

export default ChildrenH1;