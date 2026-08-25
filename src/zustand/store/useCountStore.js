import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

// const useCountStore = create((set) => (
//     {
//         number:0,
//         setNumber:() => set((state) => ({number:state.number + 1}))
//     }
// ))

const useCountStore = create(
    devtools(
        combine(
            {
                count:0
            }, // state
            
            (set) => ({
                increase: () => set((state) => ({count:state.count+1})),
                decrease: () => set((state) => ({count:state.count-1}))
            }) // actions
        )
    )
)

export default useCountStore