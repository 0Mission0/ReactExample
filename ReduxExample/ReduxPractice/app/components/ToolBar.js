import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions';

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': ''
        }
        this.onTextInput = this.onTextInput.bind(this);
        this.onTextPressEnter = this.onTextPressEnter.bind(this);
        this.onAddClicked = this.onAddClicked.bind(this);
    }

    onTextInput(event) {
        var target = event.target;
        this.setState({
            'text': target.value
        });
    }

    onTextPressEnter(event) {
        if( event.charCode == '13' ) {
            this.onAddClicked(this.state.text);
        }
    }

    onAddClicked(newText) {
        if( newText != null && newText.trim() != '' ) {
            this.setState({
                'text': ''
            });
            this.props.addTodoAction(newText);
        }
    }
    
    render() {
        return (
            <div>
                <input type='text' value={this.state.text} onChange={(e) => this.onTextInput(e)} onKeyPress={(e) => this.onTextPressEnter(e)} />
                <button onClick={ () => this.onAddClicked(this.state.text) }>Add</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodoAction: (text) => dispatch(addTodoAction(text))
})

export default connect(null, mapDispatchToProps)(ToolBar);