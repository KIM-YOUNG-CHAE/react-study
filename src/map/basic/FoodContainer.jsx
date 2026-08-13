import React from 'react';
import Food from './Food';

const FoodContainer = () => {

    const foods = [
        {
            id : 1,
            name : "샐러드"
        },
        {
            id : 2,
            name : "치킨"
        },
        {
            id : 3,
            name : "피자"
        },
        {
            id : 4,
            name : "스테이크"
        },
    ];

    const foodList = foods.map((food, i) => (
        <Food key={i} food={food} />
    ))

    return (
        <div>
            <ul>
                {foodList}
            </ul>
        </div>
    );
};

export default FoodContainer;