import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';
import Coupon from './Coupon';

const ProductContainer = () => {

    const [amount, setAmount] = useState(1)
    const [coupon, setCoupon] = useState(0)
    
    // const handleAmountDecreaseOnClick = () => setAmount(amount - 1)
    // 부모가 자식에게 핸들러를 넘길 때 useCallback
    const handleAmountDecreaseOnClick = useCallback(() => {
        setAmount(amount - 1)
    }, [coupon])
    
    const handleAmountIncreaseOnClick = () => setAmount(amount + 1)
    const handleCouponDecreaseOnClick = () => setCoupon(coupon - 1)
    const handleCouponIncreaseOnClick = () => setCoupon(coupon + 1)
    
    // useMemo(() => {}, [])
    // const props = useMemo(() => {
    //     console.log("값이 변화됨")
    //     return {amount: amount, coupon: coupon}
    // }, [amount, coupon]) 

    // 해결
    const amountMemo = useMemo(() => {
        console.log("amount 연산")
        return amount
    }, [amount])
    
    const couponMemo = useMemo(() => {
        console.log("coupon 연산")
        return coupon
    }, [coupon])

    console.log("부모 연산")

    return (
        <div style={{margin: "0 auto", width: "500px"}}>
            <p>[책] 배워서 바로 써먹는 리엑트</p>
            <div style={{display: 'flex'}}>
                <Amount 
                    amountMemo={amountMemo}
                    handleAmountDecreaseOnClick={handleAmountDecreaseOnClick}
                    handleAmountIncreas
                    eOnClick={handleAmountIncreaseOnClick}
                />
                <Coupon 
                    handleCouponDecreaseOnClick={handleCouponDecreaseOnClick}
                    handleCouponIncreaseOnClick={handleCouponIncreaseOnClick}
                    couponMemo={couponMemo}
                />
            </div>
        </div>
    );
};

export default ProductContainer;