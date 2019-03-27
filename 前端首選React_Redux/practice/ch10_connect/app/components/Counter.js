import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, incrementIfOddAction, incrementAsyncAction } from '../actions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrementIfOddClicked = this.onIncrementIfOddClicked.bind(this);
        this.onIncrementAsyncClicked = this.onIncrementAsyncClicked.bind(this);
    }

    onIncrementIfOddClicked() {
        if( this.props.value % 2 == 1 ) {
            this.props.onIncrementClicked();
        }
    }
    
    onIncrementAsyncClicked() {
        setTimeout(this.props.onIncrementClicked, 1000);
    }
    
    render() {
        return (
            <div>
                <span>Clicked: {this.props.value} times </span>
                <button onClick={this.props.onIncrementClicked}>+</button>{' '}
                <button onClick={this.props.onDecrementClicked}>-</button>{' '}
                <button onClick={this.onIncrementIfOddClicked}>Increment if odd</button>{' '}
                <button onClick={this.onIncrementAsyncClicked}>Increment async</button>{' '}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { value: state.CounterReducer }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrementClicked: () => dispatch(incrementAction()),
    onDecrementClicked: () => dispatch(decrementAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);