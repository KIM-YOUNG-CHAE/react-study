const getDatas = async (url) => {
    const res = await fetch(url)
    if(!res.ok) throw new Error("에러 발생")
    const datas = await res.json()
    return datas
}

export default getDatas