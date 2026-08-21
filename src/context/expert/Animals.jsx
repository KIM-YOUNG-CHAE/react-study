import React, { useContext, useState } from 'react';
import AnimalsContext from './AnimalsContext';

// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터: 동물 버튼 추가
// 동물 버튼 클릭 시 해당 버튼 삭제
// 각 Context에 선언된 insert()와 remove() action을 사용!

const Animals = () => {

    const [value, setValue] = useState("")
    const {state, actions} = useContext(AnimalsContext)
    const {animals} = state
    const {insert, remove} = actions

    const handleValueOnChange = (e) => setValue(e.target.value)
    const handleValueOnKeyDown = (e) => {
        if(e.key === "Enter"){
            insert(value)
        }
    }

    const animalButtonList = animals.map((animal, i) => (
        <button key={i} onClick={() => { remove(i) }}>{animal}</button>
    ))
    return (
        <div>
            {animalButtonList}
            <div>
                <input 
                    value={value}
                    onChange={handleValueOnChange}
                    onKeyDown={handleValueOnKeyDown}
                    type="text" 
                    placeholder='동물을 입력하세요'
                />
            </div>
        </div>
    );
};

export default Animals;