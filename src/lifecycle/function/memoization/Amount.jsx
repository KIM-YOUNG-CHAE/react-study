import React from 'react';

const Amount = (
    handleAmountDecreaseOnClick,
    handleAmountIncreaseOnClick,
    amountMemo
) => {
    return (
        <div style={{display: 'flex'}}>
            <button onClick={handleAmountDecreaseOnClick}>-</button>
            <p>수량: {amountMemo}</p>
            <button onClick={handleAmountIncreaseOnClick}>+</button>
        </div>
    );
};

export default Amount;