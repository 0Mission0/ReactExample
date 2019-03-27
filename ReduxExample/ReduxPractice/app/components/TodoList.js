import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toogleTodoAction } from '../actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from '../const';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.getFilteredTotos = this.getFilteredTotos.bind(this);
    }

    getFilteredTotos() {
        const { todos, filter } = this.props;
        switch(filter) {
            case SHOW_ALL:
                return todos;
            case SHOW_COMPLETED:
                return todos.filter(todo => todo.isCompleted);
            case SHOW_NOT_COMPLETED:
                return todos.filter(todo => !todo.isCompleted);
            default:
                return todos;
        }
    }

    render() {
        const filteredTodos = this.getFilteredTotos();
        return (
            <ul>
                { filteredTodos.map(todo =>
                    <Todo key={todo.id} {...todo} onTodoClicked={ () => this.props.onTodoClicked(todo.id) } />
                ) }
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.TodoListReducer,
        filter: state.TodoFilterReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onTodoClicked: (id) => dispatch(toogleTodoAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);