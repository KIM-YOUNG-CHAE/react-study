import React, { useState } from 'react';

const Hobbies = () => {
    const [hobbies, setHobbies] = useState(["축구", "야구", "농구"])
    const handleHobbiesOnClick = () => {
        // setHobbies(hobbies.concat("배구"))
        setHobbies([...hobbies, "배구"])
    }
    
    return (
        <div>
            <p>{hobbies.join("")}</p>
            <button onClick={handleHobbiesOnClick}>배구</button>
        </div>
    );
};

export default Hobbies;