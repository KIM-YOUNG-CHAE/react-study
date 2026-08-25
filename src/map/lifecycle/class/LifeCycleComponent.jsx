import React, { Component } from 'react';

class LifeCycleComponent extends Component {

    state = {
        number: 0,
        color: null
    }

    onClickToIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    constructor(props){
        super(props)
        console.log(props)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps", nextProps, prevState)
        if(nextProps.color !== prevState.color){
            return { color: nextProps.color } 
        }
        return null
    }

    componentDidMount(){
        console.log("마운트 직후 실행, componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState)
        // 자식의 number 상태가 5의 배수가 아닐때에만 랜더링
        return nextState.number % 5 !== 0;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate", prevProps, prevState)
        if(prevProps.color !== this.props.color){
            return prevState.color
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        if(prevState){
            console.log("업데이트 직전 state: ", prevState)
        }

        if(prevProps){
            console.log("업데이트 직전 props: ", prevProps)
        }
    }


    render() {
        return (
            <div>
                <div 
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: this.state.color,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#000"
                    }}
                >
                    <h1>{this.state.number}</h1>
                </div>
                <button onClick={this.onClickToIncrease}>더하기 버튼</button>
            </div>
        );
    }
}

export default LifeCycleComponent;