import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
    }
    
    incrementIfOdd() {
        if( this.props.value % 2 == 1 ) {
            this.props.increment();
        }
    }
    
    incrementAsync() {
        setTimeout(this.props.increment, 1000);
    }
    
    render() {
        return (
            <div>
                <span>Clicked: { this.props.value } times </span>
                <button onClick={ this.props.increment }>+</button>{' '}
                <button onClick={ this.props.decrement }>-</button>{' '}
                <button onClick={ this.incrementIfOdd }>Increment if odd</button>{' '}
                <button onClick={ this.incrementAsync }>Increment async</button>
            </div>
        );
    }
}

export default Counter;