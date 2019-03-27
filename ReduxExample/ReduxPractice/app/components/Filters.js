import React from 'react';
import { connect } from 'react-redux';
import { setFilterAction } from '../actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from '../const';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.onShowAllClicked = this.onShowAllClicked.bind(this);
        this.onShowCompletedClicked = this.onShowCompletedClicked.bind(this);
        this.onShowNotCompletedClicked = this.onShowNotCompletedClicked.bind(this);
    }

    onShowAllClicked() {
        this.props.setFilterAction(SHOW_ALL);
    }

    onShowCompletedClicked() {
        this.props.setFilterAction(SHOW_COMPLETED);
    }

    onShowNotCompletedClicked() {
        this.props.setFilterAction(SHOW_NOT_COMPLETED);
    }

    render() {
        const { filter } = this.props;
        return (
            <div>
                <button onClick={this.onShowAllClicked} disabled={ (filter == SHOW_ALL) ? true : false }>All</button>{' '}
                <button onClick={this.onShowCompletedClicked} disabled={ (filter == SHOW_COMPLETED) ? true : false }>Completed</button>{' '}
                <button onClick={this.onShowNotCompletedClicked} disabled={ (filter == SHOW_NOT_COMPLETED) ? true : false }>Not Completed</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        filter: state.TodoFilterReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setFilterAction: (filter) => dispatch(setFilterAction(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);