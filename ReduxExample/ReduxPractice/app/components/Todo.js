import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.onClicked = this.onClicked.bind(this);
    }

    onClicked(e) {
        e.preventDefault();
        this.props.onTodoClicked();
    }

    render() {
        const { text, isCompleted } = this.props;
        return (
            <li onClick={this.onClicked} style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                { text }
            </li>
        );
    }
}

export default Todo;