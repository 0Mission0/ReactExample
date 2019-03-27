import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onIncrementIfOdd = this.onIncrementIfOdd.bind(this);
        this.onIncrementAsync = this.onIncrementAsync.bind(this);
        this.state = {
            "value": 0
        };
    }
    
    onIncrement() {
        var newValue = this.state.value + 1;
        this.setState({
           "value": newValue
        });
    }
    
    onDecrement() {
        var newValue = this.state.value - 1;
        this.setState({
           "value": newValue
        });
    }
    
    onIncrementIfOdd() {
        var value = this.state.value;
        if( value % 2 == 1 ) {
            this.setState({
            "value": value + 1
            });
        }
    }
    
    onIncrementAsync() {
        setTimeout(this.onIncrement, 1000);
    }
    
    render() {
        return (
            <div>
                <span>Clicked: {this.state.value} times</span>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrementIfOdd}>Increment if odd</button>
                <button onClick={this.onIncrementAsync}>Increment async</button>
            </div>
        );
    }
}

export default Counter;