import { createContext, useState } from "react";

// 초기값
const FontSizeContext = createContext({
    state: {style: ""},
    actions: {setStyle: () => {}}
})

export const FontSizeProvider = ({children}) => {
    const [style, setStyle] = useState({
        fontSize:"30px",
        color:"black"
    })
    
    const value = {
        state: {style},
        actions: {setStyle}
    }

    return (
        <FontSizeContext.Provider value={value}>
            {children}
        </FontSizeContext.Provider>
    )
}

export default FontSizeContext