import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <span>Clicked: { this.props.value } times </span>
                <button onClick={ this.props.increment }>+</button>
                <button onClick={ this.props.decrement }>-</button>
            </div>
        );
    }
}

export default Counter;