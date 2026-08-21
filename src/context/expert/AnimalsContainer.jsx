import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalsContext';

const AnimalsContainer = () => {
    return (
        <AnimalsProvider>
            <Animals/>
        </AnimalsProvider>
    );
};

export default AnimalsContainer;