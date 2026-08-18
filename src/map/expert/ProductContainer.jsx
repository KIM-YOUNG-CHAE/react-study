import React, { useState } from 'react';

const ProductContainer = () => {
    // 사용자가 구매할 상품을 입력한다.
    // 입력한 상품이 스토어에 있다면, 상품이 판매 된다.
    // 모든 상품을 판매 후 사용자가 "종료"라고 입력하면
    // 판매된 총 가격을 출력한다.
    // ex) 닌텐도
    // ex) 키보드
    // ex) 종료
    // 판매 목록
    // - 닌텐도: 700,000원
    // - 키보드: 50,000원
    // 결과: 750,000원
    const store = {
        income : 0,
        productList : [
            {
                name : "닌텐도",
                price: 700000
            },
            {
                name : "키보드",
                price: 50000
            },
            {
                name : "마우스",
                price: 30000
            },
            {
                name : "스피커",
                price: 75000
            },
            {
                name : "마이크",
                price: 150000
            },
        ]
    }

    const [cart, setCart] = useState([])
    const [product, setProduct] = useState("")
    const [isConfirm, setIsConfirm] = useState(false)
    const storeProductNames = store.productList.map((product) => product.name)
    
    const handleProductOnChange = (e) => setProduct(e.target.value)
    const handleProductOnKeyDown = (e) => {
        if(e.key === "Enter"){
            const foundProduct = store.productList.find((item) => item.name === product)
            if(foundProduct){
                setCart([...cart, foundProduct])
                setProduct("")
                return
            }else{
                alert("해당 제품은 없습니다")
            }
        }
    }
    const result = () => {
        setIsConfirm(true)
    }
    const totalProduct = () => {
       return cart.reduce((acc, item) => acc + item.price, 0);
    } 

    return (
        <>
            <div>
                <p>제품목록 : {storeProductNames.join(", ")}</p>
                <input type="text" value={product} onChange={handleProductOnChange} onKeyDown={handleProductOnKeyDown}/>
                <button onClick={result}>종료</button>
            </div>
            <hr/>
            {isConfirm && (
                <div>
                    <p>판매 목록</p>
                    <ul>
                        {
                            cart.map((item, i) => (
                                <li key={i}>{item.name} : {item.price}원</li>
                            ))
                        }
                    </ul>
                    <p>총 {totalProduct()} 원 입니다</p>
                </div>
            )}
        </>
    );
};

export default ProductContainer;