import React, { useState } from 'react';
import S from './style';

const Styled03 = () => {

    const [trigger, setTrigger] = useState(true)
    const handleTriggerOnClick = () => setTrigger(!trigger)

    return (
        <div>
            <S.TriggerButton 
                bgColor={trigger? "green" : "red"}
                onClick={handleTriggerOnClick}
            >색상 변경 버튼</S.TriggerButton>
        </div>
    );
};

export default Styled03;