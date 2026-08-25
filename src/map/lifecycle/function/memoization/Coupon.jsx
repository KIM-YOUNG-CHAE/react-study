import React from 'react';

const Coupon = (
    handleCouponDecreaseOnClick,
    couponMemo,
    handleCouponIncreaseOnClick
) => {
    return (
        <div style={{display: 'flex'}}>
            <button onClick={handleCouponDecreaseOnClick}>-</button>
            <p>쿠폰: {couponMemo}</p>
            <button onClick={handleCouponIncreaseOnClick}>+</button>
        </div>
    );
};

export default Coupon;