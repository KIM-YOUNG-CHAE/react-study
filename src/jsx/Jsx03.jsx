// 이름, 나이, 취미를 넣어서 소개글을 완성하시오
// ex) OOO입니다. 나이는 OO살, 취미는 OOO입니다. 를 화면에 출력

const Jsx03 = () => {
    const name = "김영채"
    const age = 31
    const hobby = "게임"
    return (
        <>
            <p>{name}입니다. 나이는 {age}살, 취미는 {hobby}입니다.</p>
        </>
    )
}

export default Jsx03;
