import React from 'react';
import PropsComponent03 from './PropsComponent03';
import ChildrenH1 from './ChildrenH1';
// import PropsComponent01 from './PropsComponent01';
// import PropsComponent02 from './PropsComponent02';

const PropsContainer = () => {
    // const name = "홍길동"
    // const age = 20 
    // const hobby = "코딩"

    const user = {
        name: "홍길동",
        age: 20,
        style: {color: "blue"},
        hobby: "코딩"
    }


    return (
        <div>
            {/* <PropsComponent01 name={name} age={age} hobby={hobby} /> */}
            {/* <PropsComponent02 user={user} /> */}
            <PropsComponent03>
                <ChildrenH1 style={user.style}/>
            </PropsComponent03>
        </div>
    );
};

export default PropsContainer;