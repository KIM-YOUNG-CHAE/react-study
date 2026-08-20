import React from 'react';
import FontMiddle from './FontMiddle';
import { FontSizeProvider } from './FontSizeContext';

const FontSizeContainer = () => {
    return (
        <FontSizeProvider>
            <FontMiddle/>
        </FontSizeProvider>
    );
};

export default FontSizeContainer;