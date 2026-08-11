import React, { useState } from 'react';

const Sound = () => {

    const [sound, setSound] = useState("")
    const handleSoundOnClick = (e) => {
        setSound(e.target.innerText.includes("강아지") ? "멍멍" : "야옹")
    }

    return (
        <div>
            <p>{sound}</p>
            <button onClick={handleSoundOnClick}>강아지</button>
            <button onClick={handleSoundOnClick}>고양이</button>
        </div>
    );
};

export default Sound;