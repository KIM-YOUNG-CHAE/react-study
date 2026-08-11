import React, { useState } from 'react';

const Toggle = () => {

    const [isVisible, setIsVisible] = useState(false)
    const handleIsVisibleOnClick = () => setIsVisible(!isVisible)

    return (
        <div>
            {isVisible && <h1>:)</h1>}
            <button onClick={handleIsVisibleOnClick}>토글버튼</button>
        </div>
    );
};

export default Toggle;