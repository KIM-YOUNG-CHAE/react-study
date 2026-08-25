// https://jsonplaceholder.typicode.com/posts
import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";

const usePostStore = create(
    persist(
        combine(
            {
                posts: [],
                isLoading: false,
                error: null,
            },
            (set) => ({
                clearPosts: () => set((state) => ({ posts: []})),
                fetchPosts: async () => {
                    // 데이터를 불러오기 전 초기 상태
                    set((state) => ({
                        isLoading: true, 
                        error: null
                    }))
                    try {
                        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                        if(!response.ok) throw new Error("데이터 로드 실패")
                        const datas = await response.json()
                        set((state) => ({ posts: datas, isLoading: false}))
                    } catch (err){
                        set((state) => ({ error: err.message, isLoading: false}))
                    }
                }
            })
        ),
        {   
            // localStorage의 key
            name: "post-store"
        }
    )
)

export default usePostStore;