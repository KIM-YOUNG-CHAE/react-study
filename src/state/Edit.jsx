import React, { useState } from 'react';

const Edit = () => {
    const [name, setName] = useState("홍길동")
    const [value, setValue] = useState(name)
    const [isEdit, setIsEdit] = useState(false)

    const handleIsEditOnClick = () => setIsEdit(!isEdit)
    const handleValueOnChange = (e) => setValue(e.target.value)
    const editName = () => {
        setName(value)
        setIsEdit(false)
    }

    return (
        <div>
            {isEdit ? (
                <>
                    <input 
                        placeholder='수정할 이름을 입력하세요'
                        value={value}
                        onChange={handleValueOnChange} 
                    />
                    <button onClick={editName}>✔️</button>
                    <button onClick={handleIsEditOnClick}>X</button>
                </>
            ) : (
                <>
                    <h1>{name}</h1>
                    <button onClick={handleIsEditOnClick}>✏</button>
                </>
            )}
        </div>
    );
};

export default Edit;