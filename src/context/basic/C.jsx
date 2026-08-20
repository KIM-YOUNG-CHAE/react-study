import React from 'react';
import CharContext from './CharContext';

const C = () => {
    return (
        <CharContext.Consumer>
           {(context) => (
            <h1 style={context}>컨텍스트</h1>
           )} 
        </CharContext.Consumer>
        
    );
};

export default C;