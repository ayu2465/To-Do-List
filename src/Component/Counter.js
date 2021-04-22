import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    decrement() {

        this.setState((prevState) =>({
            count: prevState.count - 1
        }))
        console.log('Value decrement');
    }
    increment (){
        this.setState((prevState)=>({
            count: prevState.count +1
        }))
            console.log('Value increment');
        }

    reset(){
            console.log('Value Reset');
            this.setState({
                count:0
            })
        }

    render() {

        return (

            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.decrement()}>-1</button>
                <button onClick={() =>this.increment()}>+1</button> 
                <button onClick={() =>this.reset()}>Reset</button>
            </div>
        )
    }
}

export default Counter
