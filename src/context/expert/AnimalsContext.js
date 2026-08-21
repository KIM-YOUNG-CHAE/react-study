// Context에 저장된 동물 세 마리를 버튼으로 출력
// input에 동물 입력 후 엔터: 동물 버튼 추가
// 동물 버튼 클릭 시 해당 버튼 삭제
// 각 Context에 선언된 insert()와 remove() action을 사용!

import { createContext, useState } from "react";

const AnimalsContext = createContext({
    state: {
        animals: []
    },
    actions: {
        insert: () => {}, 
        remove: () => {}
    }
})

export const AnimalsProvider = ({children}) => {
    const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
    const insert = (animal) => {
        setAnimals([...animals, animal])
        // setAnimals(animals.concat(animal))
    }
    const remove = (i) => {
        setAnimals(animals.filter((animal, index) => index !== i))
    }

    const value = {
        state: {
            animals: animals
        },
        actions: {
            insert: insert,
            remove: remove
        }
    }

    return (
        <AnimalsContext.Provider value={value}>
            {children}
        </AnimalsContext.Provider>
    )
}

export default AnimalsContext